import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../foundation/Layout/Grid';
import { Box } from '../../foundation/Layout/Box';
import { Text } from '../../foundation/Text';
import { Avatar } from '../../commons/Avatar';
import styled from 'styled-components';

function UserStats({ statsCount, statsTitle }) {
  return (
    <Grid.Col
      value={{ xs: 3, md: 1 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Text
        variant="paragraph1"
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

UserStats.defaultProps = {
  statsCount: 0,
};

UserStats.propTypes = {
  statsCount: PropTypes.number,
  statsTitle: PropTypes.string.isRequired,
};

function UserPostsRow(posts, index) {
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
            <figure
              className={`filter-${post.filter}`}
              style={{
                width: 'inherit',
                height: 'inherit',
                margin: '0',
              }}
            >
              <img
                src={post.photoUrl}
                alt=""
                style={{
                  objectFit: 'cover',
                  width: 'inherit',
                  height: '100%',
                  padding: '.5rem',
                }}
              />
            </figure>
          </Box>
        </Grid.Col>
      ))}
    </Grid.Row>
  );
}

function UserPosts({ posts }) {
  const gridRowLength = 3;

  // eslint-disable-next-line react/prop-types
  const postsDividedByChunks = posts.reduce((chunk, item, index) => {
    const chunkIndex = Math.floor(index / gridRowLength);

    if (!chunk[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      chunk[chunkIndex] = []; // start a new chunk
    }

    chunk[chunkIndex].push(item);

    return chunk;
  }, []);

  return (
    <Grid.Col value={{ md: 8 }} offset={{ md: 2 }}>
      {postsDividedByChunks.map((postsChunk, index) => UserPostsRow(postsChunk, index))}
    </Grid.Col>
  );
}

UserPosts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};

const ProfileScreenWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.modes.light.background.main.color};
  width: 100%;
  padding-bottom: 30px;
`;

export default function ProfileScreen({ userInfo, posts }) {
  return (
    <ProfileScreenWrapper>
      <Grid.Container
        marginTop={{ xs: '24px', md: '64px' }}
      >
        <Grid.Row
          justifyContent="center"
          columnGap={{ md: '10px' }}
        >
          <Grid.Col
            value={{ xs: 3, md: 2, lg: 3 }}
          >
            <Box
              width={{
                xs: '70px',
                sm: '90px',
                md: '120px',
                lg: '188px',
              }}
            >
              <Avatar
                src="https://via.placeholder.com/110"
                alt="Foto de perfil deste usuário"
                size="inherit"
              />
            </Box>
          </Grid.Col>
          <Grid.Row>
            <Grid.Col
              value={{ xs: 12, lg: 6 }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              padding="16px"
            >
              <Text
                variant="paragraph1"
                color="tertiary.main"
              >
                Nicolas Cage
              </Text>
              <Text
                variant="paragraph1"
                color="tertiary.light"
              >
                {userInfo.bio}
              </Text>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <UserStats
              statsCount={userInfo.totalPosts}
              statsTitle="Publicações"
            />
            <UserStats
              statsCount={userInfo.totalFollowing}
              statsTitle="Seguindo"
            />
            <UserStats
              statsCount={userInfo.totalFollowers}
              statsTitle="Seguidores"
            />
          </Grid.Row>
        </Grid.Row>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <UserPosts posts={posts} />
        </Box>
      </Grid.Container>
    </ProfileScreenWrapper>
  );
}

ProfileScreen.propTypes = {
  userInfo: PropTypes.shape({
    bio: PropTypes.string,
    totalPosts: PropTypes.number,
    totalFollowing: PropTypes.number,
    totalFollowers: PropTypes.number,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
