import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const WeatherDetails = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);
    
    let start = params.date;
    let date = Number(start.slice(8)) + 1;
    let end = start.slice(0,8)+date; 
    
    useEffect(() => {
        const getWeatherHist = async () => {
        const response = await fetch(`https://api.weatherbit.io/v2.0/history/daily?city=NY&start_date=${params.date}&end_date=${end}&key=${API_KEY}`)
        const json = await response.json()
        setFullDetails(json.data);
        }
        getWeatherHist().catch(console.error);
    },[])
    console.log(fullDetails)
    return (
     <div>
        deetscompo
     </div>
    );
};

export default WeatherDetails;