import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext";
import { LoginContainer, Cadastro } from "./styled";
import Error from "../../Helper/Error";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, load } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <LoginContainer className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="usuario" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {load ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className="perdeu" to="/login/perdeu">
        Esqueceu a Senha?
      </Link>
      <Cadastro>
        <h2>Cadastre-se</h2>
        <p>Ainda nao possui conta? Cadastre-se no site.</p>
        <Link to="/login/criar">Cadastro</Link>
      </Cadastro>
    </LoginContainer>
  );
};

export default LoginForm;
