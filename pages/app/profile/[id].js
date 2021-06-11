import React from 'react';
import UserScreen from '../../../src/components/screens/ProfileScreen';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';

function OtherUsersProfilePage() {
  return <UserScreen userInfo={[]} posts={[]} />;
}

export default websitePageHOC(OtherUsersProfilePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perfil',
    },
  },
});
