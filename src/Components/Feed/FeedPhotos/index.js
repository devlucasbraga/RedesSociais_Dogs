import React from "react";
import FeedPhotosItem from "../FeedPhotosItem";
import useFetch from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import { UlFeed } from "./styled";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <UlFeed className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </UlFeed>
    );
  else return null;
};

export default FeedPhotos;
