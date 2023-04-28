import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  // Destructuring the 'singleNews' object
  const { _id, author, image_url, title, details, rating } = singleNews;

  return (
    <div>
        {/* Card from react-bootstrap */}
      <Card className="mb-4">
        <Card.Header>
        <Image style={{height: '40px'}} src= {author.img} roundedCircle />
            {author.name}
            </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {/* Show only partial of news */}
            {
            details.length < 230 ? <>{details}</> : <>{details.slice(0, 230)} <br /><Link className="text-decoration-none" to = {`/news/${_id}`} >Read More</Link></>
            }
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
