import styled from "styled-components";

export const HeaderStyles = styled.header`
  width: 100%;
  height: 140px;

  box-shadow: -1px 12px 18px -4px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: -1px 12px 18px -4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: -1px 12px 18px -4px rgba(0, 0, 0, 0.09);

  display: flex;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 14px;
    height: 100%;
    max-width: 90%;
  }
  @media (min-width: 700px) {
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      gap: 14.1px;
      height: 100%;
      width: 1352px;
      max-width: 91%;
    }
  }
`;
