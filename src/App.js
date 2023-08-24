import React from 'react'

import {Footer, Blog, Possibility, WhatGPT3, Header} from './container';
import {Cta, Brand, Navbar} from './components'

import './App.css'
import WhatFeature from './container/features/WhatFeature';

const App = () => {
  return (
    <div className="App">
        <div className="gradient_bg">

            <Navbar />
            <Header />

        </div>
        <Brand />
        <WhatGPT3 />
        <WhatFeature />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
        
    </div>
  )
};

export default App