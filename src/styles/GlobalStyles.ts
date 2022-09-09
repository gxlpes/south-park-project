import { createGlobalStyle } from "styled-components";
import Image from "../assets/images/bg.png";

export default createGlobalStyle`

:root{
--fs-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
--fs-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
--fs-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
--fs-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
--fs-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
--fs-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
--fs-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);
    }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  a {
    color: inherit;
  }
  overflow-x: hidden;
}

  body {
    background-image: url(${Image});
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-color: ${(props) => props.theme.colors.background};

  }
  

  button {
    cursor: pointer;
    width: 7rem;
    height: 2rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textdark};
    border-radius: 2px;
    border: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    }

    
    ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary}
    }
`;
