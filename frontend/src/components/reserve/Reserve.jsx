import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { SearchContext } from "../../context/context";
import { Container, Rdesc, ReserveContainer, Ritem, RitemInfo, Rmax, Rtitle } from "./reserve.style";
import useFetch from "../../hooks/useFetch";
const Reserve = ({ setOpenModal, hotelId }) => {
  const { data, error, loading } = useFetch(`/hotels/room/${hotelId}`);
  return (
    <Container>
      <ReserveContainer>
        {" "}
        <FaTimes onClick={() => setOpenModal(false)} />{" "}
        <span>Select your rooms:</span>
      {data.map((item) => (  
          <Ritem>
            <RitemInfo>
              <Rtitle>{item.title}</Rtitle> 
              <Rdesc>{item.desc}</Rdesc>
              <Rmax>
                Max people: <b>{item.maxPeople}</b>
              </Rmax>
            </RitemInfo>
          </Ritem>
        ))}
      </ReserveContainer>
    </Container>
  );
};

export default Reserve;
