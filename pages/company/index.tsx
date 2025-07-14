import HowWeWork from '@/components/Company/HowWeWork/HowWeWork';
import WhoWeAre from '@/components/Company/WhoWeAre/WhoWeAre';
import React from 'react';
import styles from './style.module.scss';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Company = () => {
  const { t: translate } = useTranslation();

  return (
    <>
      <HeroCard
        heroCardHeight="564px"
        title={translate('company:hero:title')}
        subtitle={translate('company:hero:subtitle') as string}
        backgroundImageUrl={'/images/hero-image.png'}
        hasButton={false}
      />
      <div className="company-page-wrapper">
        <WhoWeAre />
        <HowWeWork />
      </div>
    </>
  );
};

export default Company;

export const getStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'common', 'home', 'blog', 'projects', 'services', 'faqs'])),
  },
});
