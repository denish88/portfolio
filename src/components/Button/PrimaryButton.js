import React from 'react'

export const PrimaryButton = ({ text, classname }) => {
    return (
        <button className={classname}><span>{text}</span></button>)
}
