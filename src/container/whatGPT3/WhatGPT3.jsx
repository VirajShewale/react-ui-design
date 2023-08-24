import React from 'react'
import './whatGpt.css'
import Feature from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">

        <Feature title="What is GPT-3" text= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quod. Autem enim quisquam eius labore ab perspiciatis quos nemo. Similique quis quidem alias autem?" />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination </h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque quaerat libero necessitatibus. Se" />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque quaerat libero necessitatibus. Se" />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque quaerat libero necessitatibus. Se" />
      </div>
      
      
    </div>
  )
}

export default WhatGPT3