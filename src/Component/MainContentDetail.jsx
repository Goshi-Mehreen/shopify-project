import React from 'react'
import Btn from '../assets/infobtn.png'
import VedioGenerator from './VedioGenerator'
import VideoProduct from './VideoProduct'
import { ScdualeCalData  } from '../data.js'
import { Vedioimages  } from '../data.js'
import { SeoGuide  } from '../data.js'
import MoreSells from './MoreSells.jsx'
import OtherAppDetail from './OtherAppDetail.jsx'


const MainContentDetail = () => {
  return (
    <div className='mx-20'>
    <div>
      <h1 className='font-bold text-lg text-gray-600'>Welcome to Vidify</h1>
      <p className='text-sm text-gray-500 mb-10'>Enhance your video creation with the power of AI</p>
    </div>
    <VedioGenerator/>
    <div>
      <div>
        <VideoProduct item={Vedioimages} />
        <MoreSells/>
        <VideoProduct item={ScdualeCalData} />
        <OtherAppDetail />
        <VideoProduct item={SeoGuide}/>
      </div>
        
  
</div>
    </div>
    
  )
}

export default MainContentDetail
