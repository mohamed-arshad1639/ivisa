import React from 'react'
import {} from 'react-bootstrap'
import './Navbar.css'

function Navbar() {
  return (
    <div>

<div class="container">
    <div className='logodiv'>
        <div >
        <img className='ivisalogo' src='https://s3-eu-west-1.amazonaws.com/tpd/logos/560958f90000ff000583ccb5/0x0.png'/>

          
        </div>
        <div className=''>
        <img className='bbclogo' src='data:image/png;base64,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'/>


        </div>

    </div>
    <div className= "textdiv">
        <div>
           <a  href='#'>Traval documents </a>
        </div>
        <div>
               <a  href='#'>Passport </a>

        </div>
        <div>
            <a href='#'>Photos</a>
        </div>
        <div>
          <img className='avatat' src='https://cdn-icons-png.flaticon.com/512/15/15081.png'></img>
        </div>


        <div>
           <a href='#'>Languages</a>
            
        </div>

    </div>


</div>
</div>


    
  )
}

export default Navbar