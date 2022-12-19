import styled from 'styled-components';

const SearchForm = styled.form``;

const SearchInput = styled.input`
  width: 400px;
  height: 30px;
  color: green;
  padding-left: 10px;

  :focus-visible {
    outline-color: green;
  }
`;

const FormBTN = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  color: white;
  box-shadow: yellow 1px 1px 1px, yellow 2px 2px 1px;
  background-color: green;
  border: none;
  font-weight: 700;
`;

export { SearchForm, SearchInput, FormBTN };
