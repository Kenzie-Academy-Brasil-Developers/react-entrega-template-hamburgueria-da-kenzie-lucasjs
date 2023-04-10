import styled from "styled-components";

export const MainStyles = styled.main`
  width: 100%;
  font-family: "Inter", sans-serif;

  margin-top: 43px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 23px;

  .container-Principal-Do-Header{
    width: 91%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    h1 {
      display: flex;
      align-self: center;
      font-size: 1.8rem;
      font-weight: 700;
      margin-left: 20px;
      max-width: 100%;

      span {
        max-width: 100%;
        display: flex;
        align-self: end;
        font-size: 1.89rem;
        font-weight: 400;

        margin-left: 5px;

        color: var(--grey-2);
      }
    }

    .botao-Limpar-Do-Produto {
      margin-left: 23px;

      display: flex;
      align-items: center;
      justify-content: center;
      object-fit: cover;
    }
  }
  div {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 21px;

    .sectionProdutos {
      width: 100%;
      min-height: 400px;

      ul {
        display: flex;
        margin-left: 23px;
        margin-top: 24px;
        align-self: center;
        gap: 22px;
      
      }

      @media (max-width: 999px) {
        width: 100%;
        overflow-y: none;
        overflow-x: auto;
      }
    }
  }

  @media (min-width: 1000px) {
    .container-Principal-Do-Header {
      width: 61%;
      display: flex;
      justify-content: space-between;
      align-self: normal;
      margin-bottom: 25px;
      flex-direction: row;
      h1 {
        margin-left: 8%;
      }
    }
    .container-Man-Principal {
      width: 1350px;
      max-width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .sectionProdutos {
        overflow: none;
        width: 700px;
        margin-bottom: 50px;

        ul {
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 35px;
          max-width: 100%;
        }
      }
    }
  }

  @media (min-width: 1300px) {
    .container-Man-Principal {
      .sectionProdutos {
        width: 800px;

        min-width: 1px;

        ul {
          margin: 0;
          width: 80%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 20px;
          max-width: 100%;
        }
      }
    }
  }
`;
