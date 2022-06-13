import { useForm } from "react-hook-form";
import {
  StyledButton,
  StyledContainer,
  StyledContainerButton,
  StyledInput,
} from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, useParams } from "react-router-dom";

import { motion } from "framer-motion";

const Home = ({ setUser }) => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[a-zA-Z]+$/, "Nome deve possuir apenas letras"),
    email: yup.string().required("Email obrigatório").email("email invalido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        ` Senha de 08 caracteres com pelo menos 01 letra maiúscula, 1 número e 01 caracter especial

        `
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha invalida"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const data = (user) => {
    setUser(user);
    history.push(`/userpage/${user.username}`);
  };

  console.log(errors);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledContainer>
          <form onSubmit={handleSubmit(data)}>
            <StyledInput
              required
              label="Nome"
              variant="standard"
              type="text"
              {...register("username")}
              helperText={errors?.username?.message && errors.username.message}
            />

            <StyledInput
              required
              label="Email"
              variant="standard"
              type="email"
              {...register("email")}
              helperText={errors?.email?.message && errors.email.message}
            />
            <StyledInput
              required
              label="Senha"
              variant="standard"
              type="password"
              {...register("password")}
              helperText={errors?.password?.message && errors.password.message}
            />
            <StyledInput
              required
              label="Confirmar Senha"
              variant="standard"
              type="password"
              {...register("confirmpassword")}
              helperText={
                errors?.confirmpassword?.message &&
                errors.confirmpassword.message
              }
            />
            <StyledContainerButton>
              <StyledButton variant="outlined" type="submit">
                Cadastrar
              </StyledButton>
            </StyledContainerButton>
          </form>
        </StyledContainer>
      </motion.div>
    </>
  );
};

export default Home;
