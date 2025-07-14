import React from 'react';
import styles from './style.module.scss';
import { Stack, Typography } from '@mui/material';
import WexcuteCard from '@/components/Common/WexcuteCard/WexcuteCard';
import { useTranslation } from 'next-i18next';

const OurExperties = () => {
  const { t: translate } = useTranslation();

  const OurValuesCards = [
    {
      cardIcon: '/images/quality-icon.svg',
      cardText: `${translate('home:ourValues:quality:body')}`,
      cardTitle: `${translate('home:ourValues:quality:title')}`,
    },
    {
      cardIcon: '/images/collaboration-icon.svg',
      cardText: `${translate('home:ourValues:collaboration:body')}`,
      cardTitle: `${translate('home:ourValues:collaboration:title')}`,
    },
    {
      cardIcon: '/images/innovation-icon.svg',
      cardText: `${translate('home:ourValues:innovation:body')}`,
      cardTitle: `${translate('home:ourValues:innovation:title')}`,
    },
    {
      cardIcon: '/images/integrity-icon.svg',
      cardText: `${translate('home:ourValues:integrity:body')}`,
      cardTitle: `${translate('home:ourValues:integrity:title')}`,
    },
  ];

  return (
    <Stack className={styles['section-container']} alignItems={'center'}>
      <Stack alignItems={'center'} spacing={{ xs: 5, lg: 6 }} className={styles['section-content']}>
        <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'flex-start'} width="100%" justifyContent={'center'} spacing={3}>
          <Typography
            fontSize={{ xs: '32px', lg: '48px' }}
            fontWeight={700}
            lineHeight="56px"
            width="280px"
            maxWidth={{ xs: '100%', lg: '300px' }}
            className={styles['values-title']}
          >
            {translate('home:ourValues:title')}
          </Typography>

          <Typography width="100%" fontSize="24px" fontWeight={400} lineHeight="38px">
            {translate('home:ourValues:body')}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent={{ sm: 'center', md: 'center', lg: 'center' }}
          flexWrap="wrap"
          useFlexGap
        >
          {OurValuesCards.map((card, index) => (
            <WexcuteCard
              key={index}
              icon={card.cardIcon}
              title={card.cardTitle}
              body={card.cardText}
              width="280px"
              height="240px"
              justify="start"
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurExperties;
