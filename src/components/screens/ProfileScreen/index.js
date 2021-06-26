import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../commons/Avatar';
import { Grid } from '../../foundation/Layout/Grid';
import { Box } from '../../foundation/Layout/Box';
import { ProfileStats } from './ProfileStats';
import { ProfileBio } from './ProfileBio';
import { ProfilePosts } from './ProfilePosts';
import { UserContext } from '../../wrappers/WebsitePage/context/user';

export default function ProfileScreen({ userInfo, posts: serverPosts }) {
  console.log(userInfo);
  const { posts, setPosts } = React.useContext(UserContext);

  React.useEffect(() => {
    setPosts(serverPosts.reverse());
  }, []);

  return (
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
              src="/images/avatar.png"
              alt="Foto de perfil deste usuário"
              size="inherit"
            />
          </Box>
        </Grid.Col>
        <ProfileStats
          statsCount={userInfo.totalPosts}
          statsTitle="Publicações"
        />
        <ProfileStats
          statsCount={userInfo.totalFollowing}
          statsTitle="Seguindo"
        />
        <ProfileStats
          statsCount={userInfo.totalFollowers}
          statsTitle="Seguidores"
        />
        <ProfileBio
          name="Nicolas Cage"
          bio={userInfo.bio}
          // display={{ xs: 'flex', md: 'none' }}
          display="flex"
        />
      </Grid.Row>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <ProfilePosts posts={posts} userID={userInfo.id} />
      </Box>
    </Grid.Container>
  );
}

ProfileScreen.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.string,
    bio: PropTypes.string,
    totalPosts: PropTypes.number,
    totalFollowing: PropTypes.number,
    totalFollowers: PropTypes.number,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
