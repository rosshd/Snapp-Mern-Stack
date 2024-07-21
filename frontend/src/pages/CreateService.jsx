import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateService = () => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Link, setLink] = useState('');
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
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
      navigate('/');
    } catch (error) {
      setLoading(false);
      console.error('Error posting data:', error);
    }
  };

  return (
  <div>
    <div>
      <form onSubmit={postContent} encType='multipart/form-data' name='create service' className='flex flex-col h-[50vh] items-center justify-center gap-4'>
        <input type="text" name='title' placeholder='Title' value={Title} onChange={(e) => setTitle(e.target.value)} required/>
        <input type="text" name='description' placeholder='Description' value={Description} onChange={(e) => setDescription(e.target.value)} required/>
        <input type="text" name='link' placeholder='Link' value={Link} onChange={(e) => setLink(e.target.value)} />
        <input type="file" name="files" multiple onChange={handleFileChange} required/>
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
    </div>
    <div>
      {files.length > 0 && (
        <div className='justify-center'>
          <h3>Selected Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
  );
};

export default CreateService;