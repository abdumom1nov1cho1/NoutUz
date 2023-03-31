import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pnf = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="Page__div">
        <img src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt=""/>
        <div className="Page__texts">
            <h1 className='page__h1'>Page is not found !!!</h1>
            <button className='Page__btn btn btn-primary'
            onClick={() => navigate(-1)}
            >Back to home</button>
        </div>
        </div>
    </div>
  )
}

export default Pnf