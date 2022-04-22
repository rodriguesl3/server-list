import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  margin-top: 30px;

  .active {
    border: 3px solid black;
    font-weight: bolder;
  }
`;

export const PaginationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;

  width: 50px;
  height: 50px;

  border: 1px solid black;
  border-radius: 20px;

  cursor: pointer;
`;
