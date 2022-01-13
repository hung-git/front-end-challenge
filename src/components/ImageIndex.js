import React, { useState, useEffect } from 'react'
import { fetchImageList } from '../config/api'
import "./MyStyles.css"

const ImageIndex = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
      fetchImageList
      .then((data) => {
      
        console.log(data)
        
      setImages(data);
    });

  }, []);

  return (
    <>
    {images.map((e, index) => {
      return (
        <div key={index} className="container">
          <img src={e.url} alt={e.title}/>
          <div className="content">
          <h4>{e.title}</h4>
          <br/>
          <p>{e.date}</p>
          <br/>
          <p>{e.explanation}</p>
          <br/>
          <button>Like</button>
          </div>
        </div>
      )
    })}
    </>
  )
}

export default ImageIndex
