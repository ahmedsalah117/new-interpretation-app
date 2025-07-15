import React from 'react';
import styles from './style.module.scss';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { Stack } from '@mui/material';
import { useTranslation } from 'next-i18next';

const hero = {
  title: `AI-Powered Interpretation Services`,
  subTitle: `Break down language barriers and connect with the world.\nOur advanced AI technology provides real-time, accurate, and culturally sensitive interpretation for all your needs`,
  backgroundImageUrl: '/images/hero-image.png',
};

const Hero = () => {
  const { t: translate } = useTranslation<any>();
  return (
    <Stack>
      <HeroCard
        key={hero.title}
        title={hero.title}
        subtitle={hero.subTitle}
        backgroundImageUrl={hero.backgroundImageUrl}
        heroCardHeight="844px"
      />
    </Stack>
  );
};

export default Hero;
