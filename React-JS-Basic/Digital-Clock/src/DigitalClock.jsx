import React, {useState,useEffect} from 'react'
function DigitalClock()
{
    const[time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);

        return ()=> {
            clearInterval(intervalId);
        }
    },[])

    function formatTime()
    {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours>=12 ? "PM" : "AM";
        hours = hours%12 || 12;

        
        return `${padString(hours)}:${padString(minutes)}:${padString(seconds)} ${meridian}`;
    }

    function padString(numbers)
    {
      return (numbers<10? "0" : "") + numbers;  
    }


    return(
        <div className="Clock-container">
            <div className="Clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock