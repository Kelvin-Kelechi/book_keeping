import React, { useContext, useState } from "react";

import {
  Close,
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

  const getDatesInRange = (start, end) => {
    const date = new Date(start.getTime());
    let list = [];
    if (data <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };
  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDate.some((date) => 
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleClick = () => {};
  return (
    <Container>
      <ReserveContainer>
        {" "}
        <Close onClick={() => setOpenModal(false)} />
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
                  disabled={!isAvailable(roomNumber)}
                />
              </Room>
            ))}
          </Ritem>
        ))}
        <button onClick={handleClick}>Reserve now</button>
      </ReserveContainer>
    </Container>
  );
};

export default Reserve;
