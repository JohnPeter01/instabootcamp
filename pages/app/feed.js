/* eslint-disable react/prop-types */
import React from 'react';
import FeedScreen from '../../src/components/screens/FeedScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import { authService } from '../../src/services/auth/authService';

function FeedPage({ user }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FeedScreen user={user} />;
}

export default websitePageHOC(FeedPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'feed',
    },
    menuProps: {
      display: true,
      hasActiveSession: true,
    },
  },
});

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);

  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();

    return {
      props: {
        user: {
          ...session,
        },
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();
  return {
    props: {},
  };
}
