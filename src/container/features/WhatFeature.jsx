import React from 'react'
import './whatfeature.css'
import { Feature } from '../../components';

const featuresData = [
  {
    title : 'Improving end distrusts instantly',
    text :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo omnis eligendi iste rem consequatur sequi placeat reiciendis quia neque eaque voluptatum laboriosam, cumque dolorum, consequuntur ad, velit illo? Ipsam?' ,
  },

  {
    title : 'Become the tended active',
    text :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo omnis eligendi iste rem consequatur sequi placeat reiciendis quia neque eaque voluptatum laboriosam, cumque dolorum, consequuntur ad, velit illo? Ipsam?' ,
  },

  {
    title : 'Message or am nothing',
    text :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo omnis eligendi iste rem consequatur sequi placeat reiciendis quia neque eaque voluptatum laboriosam, cumque dolorum, consequuntur ad, velit illo? Ipsam?' ,
  },

  {
    title : 'Really boylaw county',
    text :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo omnis eligendi iste rem consequatur sequi placeat reiciendis quia neque eaque voluptatum laboriosam, cumque dolorum, consequuntur ad, velit illo? Ipsam?' ,
  },

];

const WhatFeature = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
          {
            featuresData.map((item, index) => (
              <Feature title={item.title} text={item.text} key={item.title + index}/>
            ))
          }
      </div>

      </div>
  )
};


export default WhatFeature