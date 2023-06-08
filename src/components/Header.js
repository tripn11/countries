import React, { useEffect, useState} from 'react';

export default (props) => {
    const [mode, setMode] = useState('');

    useEffect(()=>{
        if(localStorage.getItem('mode') === null) {
            setMode('')
        }else if (localStorage.getItem('mode') === 'dark') {
            setMode('dark')
        }
    }, [])


    useEffect(()=>{
        props.transmitter(mode);
    },[mode])

    const buttonchanger = (e, data) => {
        if(e.target.tagName.toLowerCase() === 'p') {
            if (data === 'dark') {
                setMode('dark');
            }else if (data === 'light') {
                setMode('');
            }
        }
    }

    const modeChanger = (e) => {
        if(localStorage.getItem('mode') === null) {
            localStorage.setItem('mode','dark')
            buttonchanger(e, 'dark');
        } else {
            localStorage.removeItem('mode');
            buttonchanger(e, 'light');
        }
    }

    return (
        <div id='header' className={mode}>
            <h1>Where in the world?</h1>
            <div onClick={modeChanger}>
                <div className={`${mode==='dark'?'inactive':''}`}>
                    <ion-icon name="moon-outline"></ion-icon>
                    <p>Dark Mode</p>
                </div>
                <div className={`${mode==='dark'?'':'inactive'}`}>
                    <ion-icon name="sunny-outline"></ion-icon>
                    <p>Light Mode</p>
                </div>
            </div>
        </div>
    )
}