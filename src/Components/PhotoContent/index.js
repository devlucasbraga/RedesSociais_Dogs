import React from "react";
import { Link } from "react-router-dom";
import { ContainerPhoto, Details, Title } from "./styled";
import PhotoComments from "../PhotoComments";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <ContainerPhoto>
      <div>
        <img src={photo.src} alt={photo.title} />
      </div>
      <Details>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <Title className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <ul>
            <li>{photo.peso}Kg</li>
            <li>{photo.idade}Anos</li>
          </ul>
        </div>
      </Details>
      <PhotoComments id={photo.id} comments={comments} />
    </ContainerPhoto>
  );
};

export default PhotoContent;
