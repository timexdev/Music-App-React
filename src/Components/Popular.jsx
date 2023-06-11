import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Music = () => {
    let url = "https://musica-api.up.railway.app/popular"
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
      getData()
    }, [])
    
    const getData = () =>{
        axios.get(url)
        .then((response) =>{
            setisloading(false)
            setdata(response.data)
        })
    } 
  return (
    <>
        <div className='container-fluid' style={{backgroundColor:'rgb(255, 149, 0)'}}>
            <div className="container">
                <h1 className='text-white text-center pt-5 fw-bold'>POPULAR MUSICS</h1>
                <p className='text-white text-center fs-5 fw-semibold'>Get ready to feel the energy surge through your veins as you immerse yourself <br /> in the vibrant sounds of our Popular Music Session.</p>
                <div className="row pt-3">
                {
                isloading==true? "loading..." :
                data.map((users,index)=>(
                    <div key={index} className='col-md-4 mb-4'>
                        <div className="card" style={{height:'33rem', backgroundColor:'rgb(33, 37, 41)', border:'2px solid white'}}>
                            <div>{data && <img src={users.cover} className="card-img-top" alt="music poster" style={{height:'20rem'}} />}</div>
                            <div className="card-body">
                                <h5 className='text-warning'>{users.artist}</h5>
                                <h4 className='text-white'>Title: {users.title}</h4>
                                <div style={{width:'30px'}}>{data && <audio src={users.audio} controls={true}></audio> }</div>
                            </div>
                        </div>
                    </div>    
            ))
        }
                </div>
            </div>
            
            
                   
                </div>
            
           
    </>
  )
}

export default Music