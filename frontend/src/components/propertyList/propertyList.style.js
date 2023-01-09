import styled from "styled-components";

export const PList = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const PListItem = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;
export const PListTitle = styled.div`
  h1 {
    font-size: 18px;
    color: #444;
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;