import styled from "styled-components";

export const ProdutosStyles = styled.li`
  min-width: 251px;
  height: 344px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 22px;

  border: 2px solid #c8c8c8;
  border-radius: 5px;

  figure {
    width: 100%;
    height: 153px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;

    object-fit: cover;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  div {
    margin-left: 9px;
    width: 206px;

    h2 {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 12px;
      color: var(--grey-2);
    }

    h3 {
      font-size: 14px;
      color: var(--brand-color);
    }
  }
  button {
    margin-left: 17px;
  }

  @media (min-width: 1000px) {
    button:hover {
      background-color: var(--brand-hover);
    }
  }
`;
