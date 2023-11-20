import axios from 'axios';
import React, { useState } from 'react';

function Card() {
  const baseUrl = 'http://localhost:8080';
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);
  // let img;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Make a POST request with Axios
      const response = await axios.post(
        baseUrl + '/members/profile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Handle the response as needed
      console.log(response);
      setImg(response.data);
      // img = response.data;
      console.log('img :   ' + img);
    } catch (error) {
      console.error('2:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange} />
        <button type='submit'>Upload</button>
      </form>
      <div class='card'>
        <img
          src={`http://localhost:3000${img}`}
          class='card-img-top'
          alt={img}
        />
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>Card Text.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
