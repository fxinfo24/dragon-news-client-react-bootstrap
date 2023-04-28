import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    // Destructure 'id' from route path using useParams
    const {id} = useParams();

    // Step 2: Get/show category wise data
    const categoryNews = useLoaderData();
    console.log(categoryNews);


    return (
        <div>
            <h4>This category {id} has {categoryNews.length} news</h4>
            {/* As we've to go to News-card for each news, do map the 'categoryNews' array and send 'singleNews' as props.*/}
            {
                categoryNews.map(singleNews => <NewsCard
                key={singleNews._id}
                singleNews= {singleNews}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;