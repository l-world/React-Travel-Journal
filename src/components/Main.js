import React from 'react'
import Card from './Card'
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'


export default function Main() {
  const list = [
      { 
          id:"4541212112455787",
          imgSrc:one,
          addres1s:"JAPAN",
          title:"Mount Fuji",
          date:"12,Jan,2021-24,Jan,2021",
          content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum labore praesentium animi "
      },
      {
        id:"546314545421212",
        imgSrc:two,
        address:"AUSTRALIA",
        title:"Syden Opera House",
        date:"12,Jan,2021-24,Jan,2021",
        content:"Lorem ipsum dolor sit amet,dolorum nesciunt laborum vero hic at optio, molestias nulla non rerum ipsum quibusdam quos quaerat aspernatur porro. Totam."
    },
    {   
        id:"04t808t0e8t0",
        imgSrc:three,
        address:"AUSTRALIA",
        title:"Geirangerfjord",
        date:"12,Jan,2021-24,Jan,2021",
        content:"Earum labore praesentium animi dolorum nesciunt laborum vero hic at optio, molestias nulla non rerum ipsum quibusdam quos quaerat aspernatur porro. Totam."
    },
  ]
  const lis = list.map( item => {
      return <Card info={item} key={item.id}/>
  })
  return (
    <ul className="main">
      {lis}
    </ul>
  )
}
