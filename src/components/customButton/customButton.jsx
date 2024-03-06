import React from 'react'

const customButton = ({ title, handleClick }) => {
    return (
        <button className="Button-inicial" onClick={handleClick}>
            {title}
        </button>
    )
}

export default customButton