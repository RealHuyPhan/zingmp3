import { faArrowDown, faHeart, faLeftLong, faPlay, faRightLong, faRotate, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BottomBar() {
  return (
    <div className="flex fixed bottom-0 left-0 right-0 bg-primary-color h-[90px] pl-6 pr-6">
       <div>
         <div className='flex items-center'>
         <img className='w-[64px]' src='https://i.scdn.co/image/ab67616d0000b273d5d11b6ac4242aaa41c8be69' alt='album avatar'/>
            <div>
                <div className='flex items-center'>
                    <h5>Only</h5>
                    <FontAwesomeIcon className='h-3' icon={faUserGroup}/>    
                </div>
                <p>Lee Hi</p>
            </div>
         </div>
       </div>
         <div>
            <FontAwesomeIcon icon={faHeart}/>
         </div>
        <div>
             <div className='flex'>
                <div>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </div>
                <div className='flex'>
                    <div><FontAwesomeIcon icon={faLeftLong}/></div>
                    <div><FontAwesomeIcon icon={faPlay}/></div>
                    <div><FontAwesomeIcon icon={faRightLong}/></div>
                </div>
                <div><FontAwesomeIcon icon={faRotate}/></div>
             </div>
            <div className='flex'>
                 <div>00:07</div>
                 <div>----------</div>
                 <div>Loop</div>
            </div>
        </div>
        <div className='flex'>
            <div>MV</div>
            <div>Micro</div>
            <div>Size</div>
            <div>Loa</div>
            <div>List song</div>
        </div>
    </div>
  )
}
