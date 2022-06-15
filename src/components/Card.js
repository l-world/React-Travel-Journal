import React from 'react'
import locationIcon from '../images/location.png'

export default function Card(props) {
  const info = props.info;
  return (
    <li className='card'>
      <div className='card--img'>
          <img src={info.imgSrc} alt="" />
      </div>
      <div className='card--content'>
          <div className='card--content_geo'>
              <p className='card--content_geo_location'>
                    <img src={locationIcon} alt="" className='card--content_geo_img'/>
                    <span className='card--content_geo_text'>{info.address}</span>
              </p>
              <a href="https://www.google.com/maps">View On Google Map</a>
          </div>
          <h3 className='card--content_title'>{info.title}</h3>
          <p className='card--content_date'>{info.date}</p>
          <p className='card--content_text'>{info.content}</p>
      </div>
    </li>
  )
}

