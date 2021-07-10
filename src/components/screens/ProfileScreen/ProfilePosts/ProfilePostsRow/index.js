/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ProfilePost } from '../../../../commons/Post';
import { Box } from '../../../../foundation/Layout/Box';
import { Grid } from '../../../../foundation/Layout/Grid';

export function ProfilePostsRow(posts, index, userID) {
  const sizes = {
    xs: '95px',
    sm: '120px',
    md: '150px',
    lg: '250px',
  };
  return (
    <Grid.Row marginBottom={{ xs: '4px', md: '32px' }} key={index}>
      {posts.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <Grid.Col value={4} display="flex" justifyContent="center" key={post._id}>
          <Box
            width={sizes}
            height={sizes}
          >
            <ProfilePost
              likes={post.likes}
              photoUrl={post.photoUrl}
              filter={post.filter}
              // eslint-disable-next-line no-underscore-dangle
              id={post._id}
              userID={userID}
            />
          </Box>
        </Grid.Col>
      ))}
    </Grid.Row>
  );
}
