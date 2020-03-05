import React from 'react';

const Button = ({styleClass,value, onClick}) => (
    <button  
    onClick={(event : MouseEvent<HTMLButtonElement>) => {onClick(event)}}>
        {value}
    </button>
)
export default Button;