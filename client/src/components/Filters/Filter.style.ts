import styled from "styled-components";

export const StyledFixedBar = styled.div`
  position: fixed;
  width: 100%;
  background: white;
`;

export const FilterContainer = styled.div`
  width: 700px;
  margin: auto;
  margin-top: 30px;
  position: sticky;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  height: 80px;

  input.hide-clear[type="search"]::-webkit-search-decoration,
  input.hide-clear[type="search"]::-webkit-search-cancel-button,
  input.hide-clear[type="search"]::-webkit-search-results-button,
  input.hide-clear[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input,
  select {
    border: 0;
    margin: 0 15px;
    font-size: 18px;
  }
  input:focus,
  select:focus {
    outline: none;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 90%;
  }
`;

export const StyledSelectOptions = styled.select`
  width: auto;
  margin-left: 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 0;

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  @media (max-width: 750px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const StyledSearchBox = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  padding: 15px 0;

  box-shadow: rgb(0 0 0 / 16%) 0px 3px 3px;
  border: 1px solid rgb(229, 236, 239);

  img {
    position: absolute;
    right: 20px;
    width: 25px;
    object-fit: cover;
  }

  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const FilterOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
