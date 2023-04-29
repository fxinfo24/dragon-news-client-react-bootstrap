import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  // Get/show id wise news detail data
  const newsDetail = useLoaderData();
  console.log(newsDetail);

  //   Destructure newsDetail Object and show in Card
  const {  _id, author, image_url, title, details, category_id } = newsDetail;

  return (
    <div>
      {/* <h4>News details coming soon</h4> */}

      {/* Card from react-bootstrap */}
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to = {`/category/${category_id}`}><Button variant="primary"><FaArrowLeft></FaArrowLeft> All News In this Category</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
