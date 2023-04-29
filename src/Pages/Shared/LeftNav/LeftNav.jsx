import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

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
            <div className='ps-4'>
            {
                categories.map(category => <p key = {category.id}>
                    <Link to = {`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                </p>)
            }
            <div>
      <Row xs={1} className="g-4 mt-4">
        {/* First card */}
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
              Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Second Card */}
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Third Card */}
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
              Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
            </div>
        </div>
    );
};

export default LeftNav;