import React from 'react';
import styles from './style.module.scss';
import ProjectsPage from '@/components/Projects/Projects';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



const Projects = () => {
  const { t: translate } = useTranslation<any>();
  return (
    <>
      <HeroCard
        title={translate('projects:hero:title')}
        backgroundImageUrl={'/images/hero-image.png'}
        hasButton={false}
        heroCardHeight="632px"
      />
      <div className="projects-page-wrapper">
        <ProjectsPage />
      </div>
    </>
  );
};

export default Projects;

export const getStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'common', 'home', 'blog', 'projects', 'services', 'faqs'])),
  },
});
