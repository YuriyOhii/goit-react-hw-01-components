import PropTypes from 'prop-types';
import { getPercentsFromSingleNumber } from 'assets/utils';
import {
  StatsTable,
  Title,
  StatList,
  StatItem,
  Percentage,
  Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsTable>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, percentage, label }) => (
          <StatItem key={id} itemQuantity={stats.length}>
            <Label>{label}</Label>
            <Percentage>{getPercentsFromSingleNumber(percentage)}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatsTable>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
