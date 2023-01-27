import React from 'react';
import '../style/leftmenu.css';
 //import {SiApplemusic, FaEllipsisH} from 'react-icon/fa';
function leftMenu() {
  return (
    <div className='LeftMenu'>
        <div className='logoContainer'>
            {/* <i><SiApplemusic/></i>
            
            //<i><FaEllipsisH/></i> */}
            <h2>Iboytech Player</h2>
        </div>
        <div className='searchbox'></div>
    </div>
  )
}

export default leftMenu

