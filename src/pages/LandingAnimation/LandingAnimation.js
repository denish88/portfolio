import React, { useEffect, useState } from 'react'
import './LandingAnimation.css'
import { useAnimationContext } from '../../context/AnimationContext';

const GREETINGS = ["Hello", "Bonjour", "સ્વાગત છે", "नमस्ते", "வணக்கம்", "Salve", "Olá"]

export const LandingAnimation = () => {
    const { setLandingAnimationComplete } = useAnimationContext();
    const [msg, setMsg] = useState(null)
    const [divHide, setDivHide] = useState(false)

    useEffect(() => {
        const timers = GREETINGS.map((element, index) =>
            setTimeout(() => {
                setMsg(element);
                if (index === GREETINGS.length - 1) {
                    setTimeout(() => {
                        setMsg('');
                        setDivHide(true)
                    }, 500);
                }
            }, 300 * (index + 1))
        );

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
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
