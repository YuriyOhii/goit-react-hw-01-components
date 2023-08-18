import styled from '@emotion/styled';

const ProfileBox = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 300px;
  line-height: 1.5;

  color: #212121;
  background-color: azure;

  border-radius: 4px;
  border: 1px solid gray;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

const Description = styled.div`
  text-align: center;
`;

const Photo = styled.img`
  margin: 20px auto 4px;

  border-radius: 50%;
  border: 1px solid #212121;
  background-color: #fff;

`;

const Name = styled.p`
  margin-bottom: 4px;

  font-size: 30px;
  font-weight: 700;
`;

const Tag = styled.p`
  margin-bottom: 4px;

  font-size: 24px;
  font-weight: 500;

  color: #787474;
`;

const Location = styled(Tag)``;

const Statistics = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: space-between;

  border-top: 1px solid #787474;
  background-color: #55ecec;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100% / 3);

  font-weight: 700;
`;

const MiddleItem = styled(StatsItem)`
  border-left: 1px solid #787474;
  border-right: 1px solid #787474;
`;

const StatsLabel = styled.span`
  font-size: 14px;
  line-height: 2;

  color: #787474;
`;

const StatsQuantity = styled.span`
  font-size: 20px;
  line-height: 2;
  
  color: #787474;
`;

export {
  ProfileBox,
  Description,
  Photo,
  Name,
  Location,
  Tag,
  Statistics,
  StatsItem,
  StatsLabel,
  MiddleItem,
  StatsQuantity,
};
