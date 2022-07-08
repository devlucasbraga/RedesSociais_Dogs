import React from "react";
import Image from "../../Helper/Image";
import { PhotoItem, Visualizacao } from "./styled";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <PhotoItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <Visualizacao>{photo.acessos}</Visualizacao>
    </PhotoItem>
  );
};

export default FeedPhotosItem;
