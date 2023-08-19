import styled from '@emotion/styled';

const Friend = styled.li`
  display: flex;
  align-items: center;

  max-width: 30%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;

  border: 1px solid #212121;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;

  :not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
const FriendStatus = styled.span`
  margin-right: 8px;

  width: 16px;
  height: 16px;

  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
const FriendPhoto = styled.img`
  margin-right: 8px;

  border: 2px solid #787474;
  border-radius: 4px;
`;
const FriendName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 2;

  color: #212121;
`;

export { Friend, FriendPhoto, FriendName, FriendStatus };
