import React from "react";
import { ButtonDelete } from "./styled";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <ButtonDelete disabled>Deletar</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleClick}>Deletar</ButtonDelete>
      )}
    </>
  );
};

export default PhotoDelete;
