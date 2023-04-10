import styled from "styled-components";

export const Carrinhostyle = styled.li`
  width: 100%;
  height: 6rem;
  position: relative;

  display: flex;

  figure {
    width: 83px;
    height: 100%;
    margin-left: 10px;

    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div {
    width: 100px;
    align-self: center;
    margin-left: 18px;
    h2 {
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 18px;
    }
    p {
      font-size: 0.6rem;
      font-weight: 400;
    }
  }

  button {
    background-color: transparent;
    border: none;

    color: var(--grey-2);
    font-size: 0.8rem;

    position: absolute;

    top: 34px;
    right: 10px;

    cursor: pointer;
  }

  @media (min-width: 370px) {
    div {
      width: 150px;
      h2 {
        font-size: 1rem;
        font-weight: 700;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 500px) {
    div {
      width: 58%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 0.8rem;
        font-weight: 700;
      }
      p {
        font-size: 0.9rem;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 1000px) {
    div {
      align-items: flex-start;
      width: 80px;
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;
