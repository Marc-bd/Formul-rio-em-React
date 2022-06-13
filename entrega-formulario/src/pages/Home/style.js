import styled from "styled-components";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const StyledContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  height: 27rem;
  width: 16rem;
  background-color: transparent;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 80%;
    justify-content: space-evenly;
  }
`;
export const StyledInput = styled(TextField)`
  font-size: small;

  margin-bottom: 7px;

  p {
    color: red;

    width: 13rem;
  }
`;
export const StyledButton = styled(Button)``;
export const StyledContainerButton = styled.div`
  margin-top: 0.5rem;
`;
