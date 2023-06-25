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

export const youtube = async (req,res) =>
{
    try{

            

    }
    catch(err)
    {
        return res.send(err)
    }
}














AIzaSyDpuymqdQmCkgvF45ZAiBpMufRO-AhVTdM


924647462959-d24s8fivc7sj12t13lig0k3cj6n6sb87.apps.googleusercontent.com


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







//twitter keys

api keys : oeJQCvilUMG94KQsIY61DlQf9

 api secret key - YeM5pXwG5JLptjDmY7m2ypuDPzPNfoTpo3iEDCPFOkZsNJgLzz


 Authentication token : AAAAAAAAAAAAAAAAAAAAALEPoQEAAAAASalylaSyXULDxXitKn231%2BbKtqU%3Dqu26bd32JxWD4BxZZPHftlkmqKISBUeYfzCGxtQwrgWOrd3NEu


 1670363589750984704-57jpsIPZTj8eUodeiM4EhkXNHhhE4g - accesstoken 

 J67epMtZhB5ve8rJQ5TXoIE7HESkm05tfuWunnOhgqbgZ - accesstoken secret




 curl --location 'https://api.twitter.com/2/tweets/1275828087666679809?tweet.fields=attachments%2Cauthor_id%2Ccreated_at%2Centities%2Cgeo%2Cid%2Cin_reply_to_user_id%2Clang%2Cpossibly_sensitive%2Creferenced_tweets%2Csource%2Ctext%2Cwithheld'