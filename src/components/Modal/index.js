import React from "react";
import { Container, ModalBody } from "./styled";

export default ({ status, setStatus, children }) => {
  const handleModalClick = (e) => {
    // verificação para fechar o modal somente se clicar fora dele.
    // se clicar dentro do container nada acontece.
    if (e.target.classList.contains("modalBg")) {
      setStatus(false);
    }
  };

  return (
    <Container className="modalBg" status={status} onClick={handleModalClick}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};
