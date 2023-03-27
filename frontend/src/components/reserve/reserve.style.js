import styled from 'styled-components'
import { FaTimes } from "react-icons/fa";

export const Close = styled(FaTimes)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.418);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
export const ReserveContainer = styled.div`
  background-color: white;
  padding: 20px;
  position: relative;
  button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
    margin-top: 20px;
  }
`;
export const Ritem = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 20px;
`;
export const RitemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Rtitle = styled.div`
  font-weight: 500;
`;
export const Rdesc = styled.div`
  font-weight: 300;
`;
export const Rmax = styled.div`
  
  font-size: 12px;
`; 
export const Rprice = styled.div`
  font-weight: 500;
`;
export const Room = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RSelectedRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 8px;
  color: gray;
`;
