import React, { useState, useEffect } from 'react'

const ImageIndex = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=l4PZsOew3qNeZFai95z5tLNVK7wUhmZgQfzgh5dj&count=10")
      .then((res) => res.json())
      .then((data) => {
      
        console.log(data)
        
      setImage(data);
    });

  }, []);

  return (
    <div>
      list of images here
    </div>
  )
}

export default ImageIndex
