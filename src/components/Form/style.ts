import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 45px;

  padding: 203px 0 138px;
  max-width: 459px;
  width: 100%;
  margin: 0 auto;

  text-align: center;
  @media (max-width: 744px) {
    max-width: 321px;
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  line-height: 58px;
  font-weight: 400;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 58px;

  color: #756c6c91;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const InputContainer = styled.div`
  display: grid;
  grid-gap: 33px;
  @media (max-width: 744px) {
    grid-gap: 17px;
  }
`;
const Total = styled.p`
  font-size: 24px;
  line-height: 35px;
  font-weight: 500;
  text-align: left;
  font-weight: 500;
  @media (max-width: 414px) {
    font-size: 18px;
  }
`;
export { StyledForm, Title, Text, InputContainer, Total };
