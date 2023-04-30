import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ singleCategory }) => {
  // console.log(singleCategory);
  // Destructuring the 'singleNews' object
  const { _id, author, image_url, title, details, rating, total_view } =
  singleCategory;

  return (
    <div>
      {/* Card from react-bootstrap */}
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author.name}</p>
            <p>
              <small>{moment(author.published_date).format("yyyy-MM-D")}</small>
            </p>
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
            {details.length < 203 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 203)} <br />
                <Link className="text-decoration-none" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={
                <FaRegStar></FaRegStar>
              }
              placeholderSymbol={
                <FaStar></FaStar>
              }
              fullSymbol={
                <FaStar></FaStar>
              }
            />
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
