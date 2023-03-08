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
import { SearchContext } from "../../context/context";
const Reserve = ({ setOpenModal, hotelId }) => {
  const { data, error, loading } = useFetch(`/hotels/room/${hotelId}`);
  const [check, setCheck] = useState([]);
  const { dates } = useContext(SearchContext);
  const handleCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setCheck(
      checked ? [...check, value] : check.filter((item) => item !== value)
    );
  };
  const getDate = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const date = new Date(start.getTime());
    let list = [];-0i0
    while (data <= end) {
      list.push(new Date(date));
      date.setDate(date.getTime() + 1);
    }
    return list;
  };
  console.log(getDate(dates[0]?.startDate, dates[0]?.endDate));
  const handleClick = ()=>{

  }
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
      <button onClick={handleClick}>Reserve now</button>
    </Container>
  );
};

export default Reserve;
