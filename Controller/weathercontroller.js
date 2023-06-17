import axios from "axios";

export const Temp = async (req,res) =>
{
    try{
        const{city} = req.body
        if(!city) return res.send ("city is Required");

        const key = '604806edd07f81fa6b4f9f852bbd00ed';

        const response = await axios.post(
            `http://api.weatherstack.com/forecast?access_key=${key}&query=${city}`
        );
        // response.send(response.current.temperature)
        let result = response.data.current.temperature;
        console.log(result);
        return res.send(result.toString());
    }
    catch(err)
    {
        return res.send(err)
    }
}


export const getwindspeed = async (req,res) =>
{
    try{
        const{city} = req.body
        if(!city) return res.send ("city is Required");

        const key = '604806edd07f81fa6b4f9f852bbd00ed';

        const response = await axios.post(
            `http://api.weatherstack.com/forecast?access_key=${key}&query=${city}`
        );
        // response.send(response.current.temperature)
        let result = response.data.current.wind_speed;
        console.log(result);
        return res.send(result.toString());
    }
    catch(err)
    {
        return res.send(err)
    }
}



export const getAstro = async (req,res) =>
{
    try{
        const{city} = req.body
        if(!city) return res.send ("city is Required");

        const key = '604806edd07f81fa6b4f9f852bbd00ed';

        const response = await axios.post(
            `http://api.weatherstack.com/forecast?access_key=${key}&query=${city}`
        );
        // response.send(response.current.temperature)
        let result = response.data.forecast['2023-06-16'].astro;
        console.log(result);
        return res.send(result);
    }
    catch(err)
    {
        return res.send(err)
    }
}