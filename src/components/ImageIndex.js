import React, { useState, useEffect } from 'react'
import { fetchImageList } from '../config/api'
import "./MyStyles.css"
import ImageDetails from './ImageDetails'

const ImageIndex = () => {
  const [images, setImages] = useState([]);

  
  // const [x, setX] = useState([])
  // const [y, setY] = useState([])

  useEffect(() => {
      fetchImageList
      .then((data) => {
      
      
      // const half = Math.ceil(data.length / 2);    

      // const firstHalf = data.slice(0, half)
      // const secondHalf = data.slice(-half)
      //   // console.log(data)
      
      // setX(firstHalf);
      // setY(secondHalf)
      setImages(data)
    });

  }, []);

  return (
    <>
    {/* <div className="column-container">
    {x.map((e, index) => {
      return (
          <ImageDetails data={e} key={index} />
      )
    })}
    {y.map((e, index) => {
      return (
          <ImageDetails data={e} key={index} />
      )
    })}
    </div> */}
    
      {images.map((e, index) => {
        return (
          <div className="container" key={index}>
            <ImageDetails data={e} index={index} />
          </div>
        )
      })}
    
    </>
  )
}

export default ImageIndex
