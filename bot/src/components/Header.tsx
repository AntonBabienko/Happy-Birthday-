import { useEffect, useState } from 'react';




export default function Header() {

    const [now, setNowe] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNowe(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <header>
            <h2>Happy  </h2>
            <samp>тут буде час {now.toLocaleTimeString()}</samp>
        </header>)
}
