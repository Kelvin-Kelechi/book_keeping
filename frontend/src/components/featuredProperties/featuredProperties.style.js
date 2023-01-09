import styled from "styled-components";

export const Fp = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const FpItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
export const FpImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
export const FpName = styled.span`
  color: #333;
  font-weight: bold;
`;
export const FpCity = styled.span`
  font-weight: 300;
`;
export const FpPrice = styled.span`
  font-weight: 500;
`;
export const FpRating = styled.div`
  button {
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
  }
`;
 