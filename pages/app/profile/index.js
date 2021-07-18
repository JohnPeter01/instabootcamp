/* eslint-disable react/prop-types */
import React from 'react';
import ProfileScreen from '../../../src/components/screens/ProfileScreen';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../../src/services/auth/authService';
import { userService } from '../../../src/services/user/userService';

function ActiveUserProfilePage({ userID, userInfo, posts }) {
  const orderedPosts = posts.reverse();
  return <ProfileScreen userID={userID} userInfo={userInfo} posts={orderedPosts} />;
}

export default websitePageHOC(ActiveUserProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Seu perfil',
    },
    menuProps: {
      display: true,
      hasActiveSession: true,
    },
  },
});

export async function getServerSideProps(ctx) {
  // const { id } = params;
  const user = await authService(ctx).getSession();
  const dados = await userService.getProfilePage(ctx);

  const posts = dados.posts.filter((post) => post.user === user.id);
  const userID = user.id;
  const { userInfo } = dados;

  return {
    props: {
      userID,
      userInfo,
      posts,
    },
  };
}
