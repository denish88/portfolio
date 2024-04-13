import React, { useEffect, useState } from 'react'
import './LandingAnimation.css'
import { useAnimationContext } from '../../context/AnimationContext';

export const LandingAnimation = () => {
    const { setLandingAnimationComplete } = useAnimationContext();
    let arr = ["Hello", "Bonjour", "સ્વાગત છે", "नमस्ते", "வணக்கம்", "Salve", "Olá"]
    const [msg, setMsg] = useState(null)
    const [divHide, setDivHide] = useState(false)

    const changeTextFunction = () => {
        arr.forEach((element, index) => {
            setTimeout(() => {
                setMsg(element);
                if (index === arr.length - 1) {
                    setTimeout(() => {
                        setMsg('');
                        setDivHide(true)
                    }, 500);
                }
            }, 300 * (index + 1));
        });
    };

    useEffect(() => {
        changeTextFunction();
        return () => {
            arr.forEach((_, index) => {
                clearTimeout(index);
            });
        };
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLandingAnimationComplete(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, [setLandingAnimationComplete]);
    
    return (
        <>
            <div className={divHide ? 'start-animation hide' : 'start-animation'}>
                <div className='main-wrapper'>
                    <h2 className='h1'>{msg}</h2>
                </div>
            </div>
        </>
    )
}
