import {
  StyledButtonUser,
  StyledUserContainer,
  StyledUserGreeting,
} from "./style";
import loginImage from "./../../images/loginImage.svg";
import { useHistory, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const UserPage = ({ user }) => {
  const history = useHistory();
  const params = useParams();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledUserContainer>
        <StyledUserGreeting>Bem vinde, {params.username}!!</StyledUserGreeting>
        <img src={loginImage} alt="Imagem Login" />
        <StyledButtonUser onClick={() => history.push("/")}>
          Voltar
        </StyledButtonUser>
      </StyledUserContainer>
    </motion.div>
  );
};

export default UserPage;
