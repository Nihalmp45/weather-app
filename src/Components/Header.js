import React,{useState,useContext} from 'react'
import '../App.css'
import { fetchContext } from '../App'

function Header() {
    const details = useContext(fetchContext)
    const [city,setCity] = useState('Kozhikode')
    
    const handleCity = (e) =>{
        setCity(e.target.value)
    }
    
  return (
    <div> 
          <div className='city'>Your City :</div>
          <input type='text' className='header-textbox' value={details?.location?.name} onChange={handleCity}></input><div>
          </div>
    </div>
  )
}

export default Header