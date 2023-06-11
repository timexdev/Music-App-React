import React from 'react'

const Header = () => {
  return (
    <>
        <div style={{ backgroundColor:'rgb(255, 149, 0)'}}>
            <div className="row">
                <div className="col-4 d-none d-md-block">
                    <img src="https://fronthorsemusic.web.app/create-macbook@2x.png" alt="music dashboard" style={{width:'150%', marginLeft:'-200px',marginTop:'70px'}}/>
                </div>
                <div className="col-12 col-md-5 text-center" style={{marginTop:'6rem', marginBottom:'6rem'}}>
                    <h1 className='text-white fw-bold' style={{padding:'0 50px'}}>TimexMusic is here to move music forward</h1>
                    <p className='fs-4  text-white'>TimexMusic is a <span className='fw-bold'>FREE,</span>  limitless music sharing and discovery platform for <span className='fw-bold'>artists, tastemakers, labels and fans.</span> </p>
                </div>
                <div className="col-3 d-none d-md-block">
                    <img src="https://fronthorsemusic.web.app/create-ipad@2x.png" alt="music device" style={{width:'100%', overflow:'hidden'}}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header