import React from "react";
import { Link } from "react-router-dom";
import { ContainerPhoto, Details, Title } from "./styled";
import PhotoComments from "../PhotoComments";
import { UserContext } from "../../UserContext";
import PhotoDelete from "../PhotoDelete";
import Image from "../Helper/Image";

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <ContainerPhoto>
      <div>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <Details>
        <div>
          <p>
            {user.data && user.data.username && photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
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
        <PhotoComments id={photo.id} comments={comments} />
      </Details>
    </ContainerPhoto>
  );
};

export default PhotoContent;
