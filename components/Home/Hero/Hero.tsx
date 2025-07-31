import React from 'react';
import styles from './style.module.scss';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { Stack } from '@mui/material';
import { useTranslation } from 'next-i18next';

const hero = {
  title: `Eliminating language barriers, Building trustworthy communications`,
  subTitle: `Breaking down language barriers and connecting with the world.\nOur advanced expert interpreters provide real-time, accurate, and culturally sensitive interpretation for all your needs.`,
  backgroundImageUrl: "/images/hero-image.png",
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
