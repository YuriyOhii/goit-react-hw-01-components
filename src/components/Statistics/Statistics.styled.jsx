import styled from '@emotion/styled';
import { getRandomHexColor } from 'assets/utils/getRandomHexColor';

export const StatsTable = styled.section`
  border-radius: 4px;
  border: 1px solid gray;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / ${({ itemQuantity }) => itemQuantity});
  padding: 8px;
  
  background-color: ${getRandomHexColor};
`;
export const Label = styled.span`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.04em;
`;
export const Percentage = styled.span`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.04em;
`;
