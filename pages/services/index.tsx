import React from 'react';
import styles from './style.module.scss';
import ServicesContent from '@/components/Services/ServicesContent';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicesNew from '@/components/ServicesNew/ServicesNew';

const Services = () => {
  const { t: translate } = useTranslation<any>();
  return (
    <>
      <HeroCard
        title={translate('services:hero:title')}
        backgroundImageUrl={'/images/hero-image.png'}
        hasButton={false}
        heroCardHeight="632px"
      />
      {/* <ServicesContent /> */}
      <ServicesNew />
    </>
  );
};

export default Services;

export const getStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'common', 'home', 'blog', 'projects', 'services', 'faqs'])),
  },
});
