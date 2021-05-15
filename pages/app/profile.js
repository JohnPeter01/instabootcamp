/* eslint-disable react/prop-types */
import React from 'react';
import ProfileScreen from '../../src/components/screens/ProfileScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';
import { userService } from '../../src/services/user/userService';

function ActiveUserProfilePage({ userInfo, posts }) {
  const orderedPosts = posts.reverse();
  return <ProfileScreen userInfo={userInfo} posts={orderedPosts} />;
}

export default websitePageHOC(ActiveUserProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
    menuOnlineProps: {
      display: true,
    },
    menuOfflineProps: {
      display: false,
    },
    modal: {
      display: 1,
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();
  if (hasActiveSession) {
    const user = await authService(ctx).getSession();
    const profilePage = await userService.getProfilePage(ctx).then((response) => response);
    const posts = profilePage.posts.filter((post) => post.user === user.id);
    const { userInfo } = profilePage;

    return {
      props: {
        userInfo,
        posts,
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}
