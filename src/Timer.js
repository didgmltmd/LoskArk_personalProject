import { useEffect, useState } from "react"

const Timer = () =>{
    const [seconds,setSeconds] = useState(0);

    useEffect(() => {
        console.log('Timer component mounted or updated');

        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        },1000);

        return() => {
            console.log('TImer component unmounted');
            clearInterval(interval);
        };
    },[]);

    return(
        <div>Elapsed TIme:{seconds} seconds</div>
    )
}

export default Timer;