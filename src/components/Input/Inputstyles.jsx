import styled from "styled-components";

export const InputStyles = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;

  input {
    width: 28rem;
    max-width: 100%;
    height: 3.75rem;
    padding-left: 10px;
    position: relative;

    align-self: flex-start;

    background-color: rgba(255, 255, 255, 1);

    border: 2px solid rgba(224, 224, 224, 1);

    border-radius: 5px;
    outline-color: black;
  }

  button {
    position: absolute;
    top: 14px;
    right: 11px;
  }

  @media (min-width: 700px) {
    width: 37%;
    div {
      max-width: 82%;
      position: relative;
      display: flex;

      input {
        width: 19rem;
        max-width: 100%;
        height: 3.78rem;
        padding-left: 10px;

        background-color: rgba(255, 255, 255, 1);

        border: 2px solid rgba(224, 224, 224, 1);
        border-right: none;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
      }

      button {
        position: absolute;
        top: 14px;
        right: 11px;

        width: 17%;
        height: 2.8rem;

        background-color: var(--brand-color);
        color: rgba(255, 255, 255, 1);

        border: none;
        border-radius: 8px;

        font-size: var(--body);
        font-weight: 500;

        cursor: pointer;
      }
    }
  }

  @media (min-width: 1000px) {
    button:hover {
      background-color: var(--brand-hover);
    }
  }
`;
