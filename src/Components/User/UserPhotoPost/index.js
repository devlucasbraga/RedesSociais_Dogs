import React from "react";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { PHOTO_POST } from "../../../api";
import Error from "../../Helper/Error";
import { useNavigate } from "react-router-dom";

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

import { SectionPosPhoto, ContainerPreview } from "./styled";
import Head from "../../Helper/Head";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDeafault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <SectionPosPhoto className="animeLeft">
      <Head title="Poste sua Foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" nome="nome" {...nome} />
        <Input label="Peso" type="number" nome="peso" {...peso} />
        <Input label="Idade" type="number" nome="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <ContainerPreview>
        {img.preview && (
          <div
            className="preview"
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </ContainerPreview>
    </SectionPosPhoto>
  );
};

export default UserPhotoPost;
