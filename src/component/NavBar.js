import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faSearch, faCloudDownload, faGem, faGear } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function NavBar() {
  return (
    <div className="flex fixed top-0 left-20 right-0 justify-around items-center bg-primary-color h-[60px] z-[1]">
        <div className='flex'>
          <div className='w-[32px]'>
            <FontAwesomeIcon color='#fff' icon={faArrowLeft}/>
          </div>
          <div className='w-[32px]'>
          <FontAwesomeIcon color='#fff' icon={faArrowRight}/>
          </div>
        </div>
        <div className='bg-[#311d4f] rounded-xl p-[6px]'>
          <FontAwesomeIcon color='#fff' icon={faSearch} />
          <input className='ml-2 focus:outline-0 bg-transparent text-cyan-50' placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'/>
        </div>
       <div className='flex items-center gap-7'>
          <div className='flex justify-center items-center bg-[#311d4f] rounded-xl p-[6px]'>
            <FontAwesomeIcon color='#fff' icon={faCloudDownload}/>
            <p className='font-bold text-zinc-50 ml-1'>Tải bản Windows</p>
          </div>
          <div>
            <FontAwesomeIcon color='#fff' icon={faGem}/>
          </div>
          <div>
            <FontAwesomeIcon color='#fff' icon={faGear}/>
          </div>
          <div>
            <img className='w-9' src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp&w=256' alt='Ảnh đại diện'/>
          </div>
       </div>
    </div>
  )
}
