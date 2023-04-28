import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    // Destructure 'id' from route path using useParams
    const {id} = useParams();

    // Step 2:
    const categoryNews = useLoaderData();
    return (
        <div>
            <h4>This category {id} has {categoryNews.length} news</h4>
        </div>
    );
};

export default Category;