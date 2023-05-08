import React, { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Dragon News`;
    } ,[title]);
    return (
        <div>
            
        </div>
    );
};

export default UseTitle;