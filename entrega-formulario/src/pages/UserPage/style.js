import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 23rem;
  gap: 2rem;

  img {
    width: 14rem;
  }

  button {
    border: 1px solid;
  }
`;

export const StyledUserGreeting = styled.h2`
  font-family: monospace;
  color: #006bef;
  border-bottom: 0px solid;
  font-size: 21px;
`;

export const StyledButtonUser = styled(Button)`
  border: 1px solid;
`;
