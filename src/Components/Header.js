import React,{useState,useContext} from 'react'
import '../App.css'


function Header() {
    
    const [city,setCity] = useState('london')
    
    const handleCity = (e) =>{
        setCity(e.target.value)
    }
    
  return (
    <>
        <div className='city'>Your City :</div>
        <input type='text' className='header-textbox' value={city} onChange={handleCity}></input>
    </>
  )
}

export default Header