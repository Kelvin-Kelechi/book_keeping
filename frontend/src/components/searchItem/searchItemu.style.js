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
export const Img = styled.img`
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
export const SiDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SiDetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const SiPrice = styled.span`
  font-size: 24px;
`;
export const SiTaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;
export const siCheckButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
