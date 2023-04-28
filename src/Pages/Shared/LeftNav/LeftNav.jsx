import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        // fetch('../../../../public/data/categories.json')
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        // .then((data) => {console.log(data)})

        // As we're getting data, now we can set those on state
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => {console.log(err)});

    }, [])
    return (
        <div>
            <h4>All Category</h4>
            {/* get array data using map function */}
            {
                categories.map(category => <p key = {category.id}>
                    <Link>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;