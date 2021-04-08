import React from 'react';
import FAQScreen from '../src/components/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
//   const [faqCategories, setFaqCategories] = React.useState([]);

  //   // didMount
  //   React.useEffect(() => {
  //     fetch('https://instalura-api.vercel.app/api/content/faq')
  //       .then((respostaDoServer) => respostaDoServer.json())
  //       .then((respostaConvertida) => respostaConvertida.data)
  //       .then((resposta) => {
  //         setFaqCategories(resposta);
  //       });
  //   });

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);

  return {
    props: {
      faqCategories,
    },
  };
}
