import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    // Destructure 'id' from route path using useParams
    const {id} = useParams();
    return (
        <div>
            <h4>This is category {id}</h4>
        </div>
    );
};

export default Category;