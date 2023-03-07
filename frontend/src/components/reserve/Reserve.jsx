import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  Container,
  Rdesc,
  ReserveContainer,
  Ritem,
  RitemInfo,
  Rmax,
  Room,
  Rprice,
  Rtitle,
} from "./reserve.style";
import useFetch from "../../hooks/useFetch";
const Reserve = ({ setOpenModal, hotelId }) => {
  const { data, error, loading } = useFetch(`/hotels/room/${hotelId}`);
  const [check, setCheck] = useState([]);
  const handleCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setCheck(
      checked ? [...check, value] : check.filter((item) => item !== value)
    );
  };

  console.log(check);
  return (
    <Container>
      <ReserveContainer>
        {" "}
        <FaTimes onClick={() => setOpenModal(false)} />{" "}
        <span>Select your rooms:</span>
        {data.map((item) => (
          <Ritem key={item._id}>
            <RitemInfo>
              <Rtitle>{item.title}</Rtitle>
              <Rdesc>{item.desc}</Rdesc>
              <Rmax>
                Max people: <b>{item.maxPeople}</b>
              </Rmax>
              <Rprice>{item.price}</Rprice>
            </RitemInfo>
            {item.roomNumbers.map((roomNumber) => (
              <Room key={roomNumber._id}>
                <span>{roomNumber.number}</span>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onClick={handleCheck}
                />
              </Room>
            ))}
          </Ritem>
        ))}
      </ReserveContainer>
    </Container>
  );
};

export default Reserve;
