import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../../foundation/Layout/Grid';
import { Text } from '../../../foundation/Text';

export function ProfileStats({ statsCount, statsTitle }) {
  return (
    <Grid.Col
      value={{ xs: 3, md: 1 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Text
        variant="paragraph1bold"
        color="tertiary.main"
      >
        {statsCount}
      </Text>
      <Text
        variant="smallestException"
        color="tertiary.light"
      >
        {statsTitle}
      </Text>
    </Grid.Col>
  );
}

ProfileStats.defaultProps = {
  statsCount: 0,
};

ProfileStats.propTypes = {
  statsCount: PropTypes.number,
  statsTitle: PropTypes.string.isRequired,
};
