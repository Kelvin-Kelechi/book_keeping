import styled from "styled-components"; 

export const SearchItem = styled.div`
border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`
export const SiImg = styled.img`
width: 200px;
  height: 200px;
  object-fit: cover;
`
export const SiDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;
export const SiTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;
export const SiDistance = styled.span`
  font-size: 12px;
`;
export const SiSubtitle = styled.span`
  font-size: 12px;
  font-weight: bold;,
`;
export const SiFeatures = styled.span`
  font-size: 12px;
`;
 
 
export const SiPrice = styled.span`
  font-size: 24px;
`;
export const SiTaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;
export const SiCheckButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
export const SiCancelOp = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;
export const SiCancelOpSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;
export const SiDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SiRating = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 500;
  }
  button {
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
  }
`;
export const SiDetailTexts = styled.div`
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
`;
