import styled, { css } from "styled-components";

const Box = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;

  h2 {
    margin-bottom: 14px;
  }

  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #33333387;
      opacity: 1;
    }
  }

  ${props => props.isValid === 'true' && css`
    input {
      border: 1px solid #0eaa23;
      box-shadow: 0 1px 1px rgba(207, 202, 198, 0.075)inset, 0 0 4px rgba(18, 158, 41, 0.6);
      outline: 0 none;
    }
  `}

  ${props => props.isValid === 'false' && css`
    input {
      border: 1px solid #c00c0c;
      box-shadow: 0 1px 1px rgba(207, 202, 198, 0.075)inset, 0 0 4px rgba(18, 158, 41, 0.6);
      outline: 0 none;
    }
  `}

  ${props => props.isValid === 'false' && css`
  input:focus {
    border: 1px solid #054A91;
    box-shadow: 0 1px 1px rgba(207, 202, 198, 0.075)inset, 0 0 8px rgba(32, 18, 158, 0.6);
    outline: 0 none;
  }
  `}

  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }

 

`;

export default Box;