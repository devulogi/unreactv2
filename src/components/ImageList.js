/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image, i) => (
    <img key={i} src={image.urls.regular} />
  ));
  return <div className="image-list">{images}</div>;
};

export default ImageList;
