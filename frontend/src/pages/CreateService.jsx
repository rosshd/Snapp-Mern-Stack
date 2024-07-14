import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateService = () => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Link, setLink] = useState('');
  const [File, setFile] = useState(null); // State for file
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const postContent = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append('Title', Title);
    formData.append('Description', Description);
    formData.append('Link', Link);
    formData.append('File', File); // Append file to form data

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
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Update file state
  };

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <form onSubmit={postContent} encType='multipart/form-data' className='flex flex-col h-screen items-center justify-center gap-4'>
        <input type="text" placeholder='Title' value={Title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='Description' value={Description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder='Link' value={Link} onChange={(e) => setLink(e.target.value)} />
        <input type="file" name="File" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateService;