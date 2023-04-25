import { faDotCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Content() {
  return (
    <div className="w-full pl-[80px] pt-[60px] h-[800px] bg-primary-color">
        <div className='float-left w-[30%] pt-12 pl-6'>
           <img className='w-[200px] h-[200px] rounded' alt='album' src='https://avatar-ex-swe.nixcdn.com/song/2021/08/27/1/4/2/5/1630071516480_640.jpg'/>
        </div>
        <div className='float-left w-[70%] pt-12'>
           <div className='flex flex-col justify-between items-start'>
               <div>
                <h2>Only</h2>
                <p>Lee Hi</p>
                <p>57k người yêu thích</p>
               </div>
               <div>
                 <button>Tiếp tục phát</button>
                 <FontAwesomeIcon icon={faHeart}/>
                 <FontAwesomeIcon icon={faDotCircle}/>
                </div>
           </div>
        </div>
    </div>
  )
}
