import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

export const fetchContext = React.createContext()


function App() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([])
    const api1=`http://api.weatherapi.com/v1/current.json?key=05bb476d81fe499cb6b130828232107&q=${lat},${long}`
    const api2=`http://api.weatherapi.com/v1/forecast.json?key=05bb476d81fe499cb6b130828232107&q=${lat},${long}&days=7&alerts=yes`

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
            });
      
            await fetch(api1)
            .then(res => res.json())
            .then(result => {
              setData(result)
              console.log(result);
            });
            await fetch(api2)
            .then(res => res.json())
            .then(result => {
              setData(result)
              console.log(result);
            });
          }
          fetchData();
        }, [lat,long])

  return (
    <div>
        {(typeof Header != 'undefined') ? (
          <fetchContext.Provider value={data}>
              <Header />
          </fetchContext.Provider>
      ): (
        <div></div>
      )}
      <fetchContext.Provider value={data}>
          <Main />
      </fetchContext.Provider>
     
      
    </div>
  );
}

export default App;
