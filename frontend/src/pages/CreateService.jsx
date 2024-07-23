import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../assets/Spinner'
import GalPannel from '../components/galleryImgPannel';
import Button from '../components/theButton';
import Navbar from '../components/navBar.jsx';
import trash from '../assets/trashBin.webp'

const CreateService = () => {
  const [Title, setTitle] = useState('');
  const [services, setServices] = useState([]);
  const [Description, setDescription] = useState('');
  const [Link, setLink] = useState('');
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  };

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/myServices')
      .then((response) => {
        setServices(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const deleteSecton = async (id) => {
    setLoading(true);
     try {
      await axios.delete(`http://localhost:3000/myServices/${id}`)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error deleting data:', error);
    } finally {
      navigate('/gallery');
    }
  };

  const postContent = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('Title', Title);
    formData.append('Description', Description);
    formData.append('Link', Link);
    files.forEach((file, index) => {
      formData.append(`files`, file);
    });

    setLoading(true);
    try {
      await axios.post('http://localhost:3000/myServices', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error posting data:', error);
    } finally {
      navigate('/gallery');
    }
  };


  const renderService = (service, index) => {
    
    return (
      <div key={service._id} className=' flex flex-row max-w-[80dvw] justify-center mb-[10vh] max-md:items-center'>
        <div className={`flex flex-row justify-center items-center mr-8 py-4 rounded-md ml-8 overflow-hidden bg-zinc-800 dark:bg-zinc-900 border-orange-300 max-h-[60vh] w-fit border-y-8 md:self-start`}>
          <div className='h-full max-w-[40%]'>
          <GalPannel files={service.File} />
          </div>
          <div className='h-full min-w-[45%] max-w-[55%] rounded-lg px-4 flex flex-col overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent'>
            <h1 className='text-white text-start text-2xl mb-4 font-bold'>{service.Title}</h1>
            <h1 className='text-white text-opacity-50 text-xs text-start indent-4 mb-2'>{service.Description}</h1>
            {service.Link ? (
              <Button href={service.Link} className='h-12'>
                <h1 className='text-xs opacity-85'>See here</h1>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
        <button onClick={() => deleteSecton(service._id)}>
          <img src={trash} className='h-16' alt="delete" />
          <h1 className='dark:text-white'>delete</h1>
        </button>
      </div>
    );
  };

  return (
  <div className='h-screen dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 overflow-x-hidden overflow-y-scroll scrollbar-thumb-orange-300 scrollbar-thumb-rounded-full dark:scrollbar-track-zinc-800 scrollbar-track-transparent'>
    <Navbar />
    <div className='flex flex-col h-[90vh] w-screen justify-center pt-16 items-center'>
      <div className='w-[33%] h-[70vh] dark:bg-zinc-800 border-2 px-4 py-2'>
        <h1 className='text-center dark:text-white text-4xl mb-4'>Create a Gallery Post</h1>
        <form onSubmit={postContent} encType='multipart/form-data' name='create service' className='flex flex-col items-center justify-center gap-4'>
          <input type="text" name='title' placeholder='Title' value={Title} className='border-2 w-full rounded-md self-start' onChange={(e) => setTitle(e.target.value)} required/>
          <input type="text" name='description' placeholder='Description' value={Description} className='border-2 w-full rounded-md self-start' onChange={(e) => setDescription(e.target.value)} required/>
          <input type="text" name='link' placeholder='Link' value={Link} className='border-2 w-full rounded-md self-start' onChange={(e) => setLink(e.target.value)} />
          <input type="file" name="files" multiple className='self-start dark:text-white' onChange={handleFileChange} required/>
          <button type="submit" disabled={loading} className='dark:text-white rounded-md border-2 border-orange-300 py-2 px-4 mt-8'>{loading ? 'Submitting...' : 'Submit'}</button> 
            {files.length > 0 && (
              <div className='flex flex-col items-center'>
                <h3 className='dark:text-white'>Selected Files:</h3>
                <ul>
                  {files.map((file, index) => (
                    <li className='dark:text-white' key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
        </form>
      </div>
      
    </div>
    {loading ? (
        <div className='h-[80vh] dark:bg-zinc-800 bg-zinc-200 flex items-center justify-center'>
          <Spinner className='translate-y-[100px]' />
        </div>
      ) : (
        services.map((service, index) => renderService(service, index))
      )}
  </div>
  );
};

export default CreateService;