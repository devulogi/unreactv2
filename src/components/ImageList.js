/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ImageCard from "./imageCard";
import "./imageList.css";

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;
