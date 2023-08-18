import PropTypes from 'prop-types';
import { getNumberWithComa } from 'assets/utils/getNumberWithComa';
import {
  ProfileBox,
  Description,
  Photo,
  Name,
  Tag,
  Location,
  Statistics,
  StatsItem,
  MiddleItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileBox>
      <Description>
        <Photo src={avatar} alt="User avatar" width="100" height="100" />
        <Name>{username}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{location}</Location>
      </Description>
      <Statistics>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{getNumberWithComa(stats.followers)}</StatsQuantity>
        </StatsItem>
        <MiddleItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{getNumberWithComa(stats.views)}</StatsQuantity>
        </MiddleItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{getNumberWithComa(stats.likes)}</StatsQuantity>
        </StatsItem>
      </Statistics>
    </ProfileBox>
  );
};

export { Profile };

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
