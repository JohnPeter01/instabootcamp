import React from 'react';
import Head from 'next/head';

export default function SEO(headTitle) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Instalura - Projeto Base do Alura Bootcamp JAMStack';
  const title = hasHeadTitle
    ? (`${headTitle} | ${baseTitle}`)
    : baseTitle;

  const description = 'Aprenda Programação, Front-end, Data Science, UX, DevOps, Marketing, Inovação e Gestão na maior plataforma de tecnologia do Brasil';
  const img = 'https://www.alura.com.br/assets/img/alura-share.1617727198.png';
  const urlBase = 'https://www.alura.com.br/';
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={img} />
    </Head>
  );
}
