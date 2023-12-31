import styled from '@emotion/styled';
import { getRandomHexColor } from 'assets/utils';

export const StatsTable = styled.section`
  margin: 40px auto;
  max-width: 50%;
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
  padding: 8px 4px;

  background-color: ${getRandomHexColor};
  :hover {
    opacity: 0.5;
  };
  :first-of-type{
    border-bottom-left-radius: 4px;
  };
  :last-of-type {
    border-bottom-right-radius: 4px;
  

  }
`;
export const Label = styled.span`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.04em;
`;
export const Percentage = styled.span`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.04em;
`;
