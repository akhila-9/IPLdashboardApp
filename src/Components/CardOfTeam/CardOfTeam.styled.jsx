import styled from "styled-components";

export const Page1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two cards per row */
  gap: 20px;
`;
export const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 35px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  height: 110px;
  width: 420px;
  background-color: #475569;
  border-radius: 15px;
  border: 1px solid #ffffff;
`;
export const TeamLogo = styled.img`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
`;

export const TeamName = styled.div`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 20px;
`;
