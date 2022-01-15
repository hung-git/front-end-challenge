import React, { useState, useEffect } from 'react'
import { fetchImageList } from '../config/api'
import "./MyStyles.css"
import ImageDetails from './ImageDetails'
import { CircularProgress } from "@material-ui/core"

const ImageIndex = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
      setLoading(true)
      fetchImageList
      .then((data) => {
       console.log(data)
      setImages(data)
      setLoading(false)
    });
  }, []);

  return (
    <>
      {loading ? 
        <div className="progress">
          <CircularProgress size="10rem" thickness={1.25} />
        </div>
        :
        <>
          {images.map((e, index) => {
          return (
            <div className="container" key={index}>
                <ImageDetails data={e} index={index} />
            </div>
          )
          })}
        </>
      }
    </>
  )
}

export default ImageIndex
