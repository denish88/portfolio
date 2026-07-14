import React from 'react'
import { Link } from 'react-router-dom'

export const PrimaryButton = ({ text, classname, to, onClick, type = 'button' }) => {
    const content = <span>{text}</span>

    if (to) {
        return (
            <Link to={to} className={classname}>
                {content}
            </Link>
        )
    }

    return (
        <button type={type} className={classname} onClick={onClick}>
            {content}
        </button>
    )
}
