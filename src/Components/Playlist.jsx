import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Music = () => {
    let url = "https://musica-api.up.railway.app/playlist"
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
        <div className='bg-warning'>
            <div className="container">
                <div className="row pt-5">
                {
                isloading==true? "loading..." :
                data.map((users,index)=>(
                    <div key={index} className='col-md-4 mb-4'>
                        <div className="card bg-black" style={{width:'22rem', height:'38rem', border:'2px solid white'}}>
                            <div>{data && <img src={users.cover} className="card-img-top" alt="music poster" style={{height:'20rem'}} />}</div>
                            <div className="card-body text-center">
                                <h2 className='text-white'>{users.title}</h2>
                                <h5 className='text-grey'>{users.info}</h5>
                                <h4>{users.audio}</h4>
                                {/* <h6>{users.files}</h6> */}
                                {/* <div style={{width:'30px'}}>{data && <audio src={users.audio} controls={true}></audio> }</div> */}
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