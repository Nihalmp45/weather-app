import React, { useContext,useState,useEffect } from 'react'
import { fetchContext } from '../App'
import '../App.css'

const Main = () => {
    const details = useContext(fetchContext)
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000); // Update every second
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, []);
    
      const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      };
    
      const formatTime = (date) => {
        return date.toLocaleTimeString();
      };
    
    
    return (
    <>
        <div className='main'> 
          {(typeof Main != 'undefined') ? 
          (<div className='card'>
            <div className='location-name'>
          {details?.location?.name}
            </div>
            <div className='location-region'>
          {`${details?.location?.region} ,   
          ${details?.location?.country}`}
            </div>
            <div className='temperature'>
            <div className='temperature-current'>
             {details?.current?.temp_c <=35 && details?.current?.temp_c >=0 ? (
                <>Current : {details?.current?.temp_c}°C 
                {details?.current?.temp_c ?
                <img className='happy-image' src='/Images/happiness.png' alt='happy'></img>:<p>hi</p>}
                </>
             ):details?.current?.temp_c >35 ?(
                <>Current : {details?.current?.temp_c}°C 
                {details?.current?.temp_c ?
                <img className='happy-image' src='/Images/hot.png' alt='hot'></img>:<p>hi</p>}
                </>

             ):(
              <>Current : {details?.current?.temp_c}°C 
              {details?.current?.temp_c ?
              <img className='happy-image' src='/Images/snowman.png' alt='snow'></img>:<p>hi</p>}
              </>
             )}

             
  
            </div>
            <div className='temperature-feel'>
              {`Feels Like : ${details?.current?.feelslike_c}°C`}
            </div>
            <div className='temperature-wind'>
              {`Wind Speed : ${details?.current?.wind_kph} km/hr`}
            </div>
            <div className='condition'>
              {`Condition: ${details?.current?.condition?.text}`}
            </div>
            </div>

          </div>)
          :
          <div> hi</div>}

          <div className='date-time'>
          <p className='time'>{formatTime(currentDateTime)}</p>
          <p className='date'>{formatDate(currentDateTime)}</p>
          </div>
        </div>
        
        <div className='card-container-right'>
        <div className='card-right'>
                <div className='top-heading'>
                    Today's Average:
                </div>
                <div className='week-weather'>
                    {`${details?.forecast?.forecastday[0]?.day?.avgtemp_c}°C`}
                </div>
        </div>
        <div className='card-right'>
                <div className='top-heading-date'>
                {`${details?.forecast?.forecastday[1]?.date}`}
                </div>
                <div className='week-weather'>
                    {`${details?.forecast?.forecastday[1]?.day?.avgtemp_c}°C`}
                </div>
        </div>
        <div className='card-right'>
                <div className='top-heading-date'>
                {`${details?.forecast?.forecastday[2]?.date}`}
                </div>
                <div className='week-weather'>
                    {`${details?.forecast?.forecastday[2]?.day?.avgtemp_c}°C`}
                </div>
        </div>
        <div className='card-container-right'>
                <div className='card-right-2nd'>
                <div className='top-heading-date'>
                {`${details?.forecast?.forecastday[3]?.date}`}
                </div>
                <div className='week-weather'>
                    {`${details?.forecast?.forecastday[3]?.day?.avgtemp_c}°C`}
                </div>
                </div>
                <div className='card-right-2nd'>
                <div className='top-heading-date'>
                {`${details?.forecast?.forecastday[4]?.date}`}
                </div>
                <div className='week-weather'>
                    {`${details?.forecast?.forecastday[4]?.day?.avgtemp_c}°C`}
                </div>
                </div>
                <div className='card-right-2nd'>
                <div className='top-heading-date'>
                {`${details?.forecast?.forecastday[5]?.date}`}
                </div>
                <div className='week-weather'>
                    {`${details?.forecast?.forecastday[5]?.day?.avgtemp_c}°C`}
                </div>
                </div>
        </div>
        </div>
        
    </>
  )
}

export default Main