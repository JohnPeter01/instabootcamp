import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function LoginPage() {
  return (
    <h1>TEST</h1>
  );
}

export default websitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Pagina de Login',
    },
  },
});
