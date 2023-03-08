import styled from "styled-components/native";

interface Props {
  color: string;
}

export const Button = styled.TouchableOpacity<Props>`
  border-radius: 99999999px;
  border-width: 0px;
  background-color: ${(props) => props.color};
  width: 64px;
  height: 64px;

  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
