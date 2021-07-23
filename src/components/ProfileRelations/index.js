import styled, { css } from 'styled-components';
import Box from '../Box';

export const ProfileRelationsBoxWrapper = styled(Box)`


  ${props => props.isClick === 'true' && css`
    ul {
      display: grid;
      grid-gap: 8px;
      grid-template-columns: 1fr 1fr 1fr; 
      list-style: none;
      margin-bottom: 10px;
      transition: all 300ms ease-in-out;
    }
  `}

  ${props => props.isClick === 'false' && css`
    ul {
      display: grid;
      grid-gap: 8px;
      grid-template-columns: 1fr 1fr 1fr; 
      list-style: none;
      margin-bottom: 10px; 
      transition: all 300ms ease-in-out;
      max-height: 220px;
      overflow-y: hidden;
    }
`}

  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  span{
    cursor: pointer;
    transition: all 250ms ease-in-out;
    &:hover {
      color: orange;
      text-decoration: underline;
    }
  }

  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`;
