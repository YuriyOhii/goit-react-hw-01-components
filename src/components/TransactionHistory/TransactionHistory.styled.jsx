import styled from '@emotion/styled';

const Board = styled.table`
  width: 80%;
  margin: 40px auto 0 auto;

  border: 2px solid #212121;
  border-radius: 4px;

  line-height: 2;
  font-size: 18px;
  
  color: #212121;
`;

const BoardHead = styled.thead`
  font-weight: 500;

  background-color: #1a7171;
  color: white;
  th {
    padding: 4px 8px;
  }
`;

const TableRow = styled.tr`
  text-transform: capitalize;
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;

  :nth-of-type(odd) {
    background-color: #dbcece;
  }

  td {
    text-align: center;
    border:1px solid #787474  ;
  }
  
`;

export { Board, BoardHead, TableRow };
