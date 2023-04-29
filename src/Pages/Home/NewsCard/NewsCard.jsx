import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  // Destructuring the 'singleNews' object
  const { _id, author, image_url, title, details, rating, total_view } = singleNews;

  return (
    <div>
        {/* Card from react-bootstrap */}
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
        <Image style={{height: '40px'}} src= {author ?.img} roundedCircle />
           <div className="ps-2 flex-grow-1">
           <p className="mb-0">{author.name}</p>
           <p><small>{moment(author.published_date).format('yyyy-MM-D')}</small></p>
           </div>
           <div className="d-flex">
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
           </div>
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
        <Card.Footer className="text-muted d-flex">
            <div className="flex-grow-1">
            {rating.number} 
            </div>
            <div>
            <FaEye></FaEye>
            {total_view}
            </div>
            </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
