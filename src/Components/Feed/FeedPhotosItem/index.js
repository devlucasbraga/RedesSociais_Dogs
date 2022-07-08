import React from "react";
import { PhotoItem, Visualizacao } from "./styled";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <PhotoItem onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <Visualizacao>{photo.acessos}</Visualizacao>
    </PhotoItem>
  );
};

export default FeedPhotosItem;
