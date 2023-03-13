import styled from "styled-components";

export const ContainerForm = styled.form`
  display: grid;
  grid-template-columns: 60% auto;
  gap: 5rem;
  margin-top: 5rem;
`;

export const Title = styled.h2`
  font-family: "Baloo 2", sans-serif;
`;

export const Generic = styled.div`
  width: 100%;
`;

export const ContetentForm = styled.div`
  background-color: ${(props) => props.theme.COLORS.BASE["BASE_CARD"]};
  padding: 40px;
`;

export const InputTable = styled.table`
  width: 100%;
  margin-top: 30px;

  tr {
    line-height: 50px;
  }
`;
