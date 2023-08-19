import styled from '@emotion/styled';

const Friend = styled.li`
display: flex;
border: 1px solid black;
`;
const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
const FriendPhoto = styled.img``;
const FriendName = styled.p``;

export {Friend, FriendPhoto, FriendName, FriendStatus}