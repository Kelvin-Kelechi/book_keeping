import React from "react";
import { FaTimes } from "react-icons/fa";
import { Container, ReserveContainer } from "./reserve.style";
const Reserve = ({ setOpenModal, hotelId }) => {
  return (
    <Container>
      <ReserveContainer>
        {" "}
        <FaTimes onClick={() => setOpenModal(false)} />{" "}
      </ReserveContainer>
    </Container>
  );
};

export default Reserve;
