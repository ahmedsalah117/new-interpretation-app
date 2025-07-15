import React from 'react';
import styles from './style.module.scss';
import Faq from '@/components/Faq/Faq';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { Stack } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


const Faqs = () => {
  const { t: translate } = useTranslation<any>();

  const hero = {
    title: `${translate('faqs:hero:title')}`,
    backgroundImageUrl: '/images/hero-image.png',
  };

  return (
    <>
      <HeroCard key={hero.title} title={hero.title} backgroundImageUrl={hero.backgroundImageUrl} hasButton={false} heroCardHeight="632px" />
      <Stack className="faq-wrapper">
        <Faq />
      </Stack>
    </>
  );
};

export default Faqs;

export const getStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'common', 'home', 'blog', 'projects', 'services', 'faqs'])),
  },
});
