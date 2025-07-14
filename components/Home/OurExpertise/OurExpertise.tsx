import React from 'react';
import styles from './style.module.scss';
import { Stack, Typography } from '@mui/material';
import WexcuteCard from '@/components/Common/WexcuteCard/WexcuteCard';
import { useTranslation } from 'next-i18next';

const OurExpertise = () => {
  const { t: translate } = useTranslation();

  const SERVICES_CARDS = [
    {
      cardIcon: '/images/web-design-icon.svg',
      cardText: `${translate('home:ourExpertise:webDesign:body')}`,
      cardTitle: `${translate('home:ourExpertise:webDesign:title')}`,
    },
    {
      cardIcon: '/images/mobile-app-icon.svg',
      cardText: `${translate('home:ourExpertise:mobileApplications:body')}`,
      cardTitle: `${translate('home:ourExpertise:mobileApplications:title')}`,
    },
    {
      cardIcon: '/images/web-games-icon.svg',
      cardText: `${translate('home:ourExpertise:webGames:body')}`,
      cardTitle: `${translate('home:ourExpertise:webGames:title')}`,
    },
    {
      cardIcon: '/images/web-app-icon.svg',
      cardText: `${translate('home:ourExpertise:webApplications:body')}`,
      cardTitle: `${translate('home:ourExpertise:webApplications:title')}`,
    },
    {
      cardIcon: '/images/modules-icon.svg',
      cardText: `${translate('home:ourExpertise:modules:body')}`,
      cardTitle: `${translate('home:ourExpertise:modules:title')}`,
    },
    {
      cardIcon: '/images/consulting-icon.svg',
      cardText: `${translate('home:ourExpertise:consulting:body')}`,
      cardTitle: `${translate('home:ourExpertise:consulting:title')}`,
    },
  ];

  const LANGUAGE_CARDS = [
    {
      cardIcon: '/images/en.svg',
      cardText: 'English',
      cardTitle: 'English',
    },
    {
      cardIcon: '/images/langs/es.svg',
      cardText: 'Spanish',
      cardTitle: 'Spanish',
    },
    {
      cardIcon: '/images/langs/fr.svg',
      cardText: 'French',
      cardTitle: 'French',
    },
    {
      cardIcon: '/images/de.svg',
      cardText: 'German',
      cardTitle: 'German',
    },
    {
      cardIcon: '/images/langs/zh.svg',
      cardText: 'Mandarin',
      cardTitle: 'Mandarin',
    },
    {
      cardIcon: '/images/langs/ar.svg',
      cardText: 'Arabic',
      cardTitle: 'Arabic',
    },
    {
      cardIcon: '/images/langs/cantonese.svg',
      cardText: 'Cantonese',
      cardTitle: 'Cantonese',
    },
    {
      cardIcon: '/images/langs/ko.svg',
      cardText: 'Korean',
      cardTitle: 'Korean',
    },
    {
      cardIcon: '/images/langs/ja.svg',
      cardText: 'Japanese',
      cardTitle: 'Japanese',
    },
    {
      cardIcon: '/images/langs/dari.svg',
      cardText: 'Dari',
      cardTitle: 'Dari',
    },
    {
      cardIcon: '/images/langs/pashto.svg',
      cardText: 'Pashto',
      cardTitle: 'Pashto',
    },
    {
      cardIcon: '/images/langs/haitian-creole.svg',
      cardText: 'Haitian Creole',
      cardTitle: 'Haitian Creole',
    },
  ];

  return (
    <Stack className="section-container" direction={{ xs: 'column', lg: 'row' }}>
      <Stack className="section-content" direction={{ xs: 'column' }} justifyContent="space-between">
        <Stack
          direction="column"
          spacing={3}
          alignItems={{ xs: 'flex-start', lg: 'center' }}
          justifyContent={'center'}
          maxWidth={{ xs: '100%' }}
        >
          <Typography
            fontSize={{ xs: '32px', lg: '48px' }}
            fontWeight={700}
            lineHeight="56px"
            className="services-header"
            width="100%"
            // maxWidth={{ xs: '445px', lg: '345px' }}
            alignSelf="flex-start"
          >
            {/* {translate('home:ourExpertise:title')} */}
            We Speak Your Language
          </Typography>

          <Typography fontSize="24px" fontWeight={400} lineHeight="38px" width="100%">
            {translate('home:ourExpertise:body')}
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={15} alignItems="center" justifyContent="space-between">
          <Stack direction="column" spacing={3} justifyContent="center">
            {LANGUAGE_CARDS.map(
              (card, index) =>
                index < Math.ceil(LANGUAGE_CARDS.length / 3) && (
                  <WexcuteCard icon={card.cardIcon} title={card.cardTitle} body={card.cardText} key={index} height="200px" />
                )
            )}
          </Stack>
          <Stack sx={{ mt: { xs: '0px', md: '64px !important' } }} direction="column" spacing={3} justifyContent="center">
            {LANGUAGE_CARDS.map(
              (card, index) =>
                index >= Math.ceil(LANGUAGE_CARDS.length / 3) &&
                index < Math.ceil((LANGUAGE_CARDS.length * 2) / 3) && (
                  <WexcuteCard icon={card.cardIcon} title={card.cardTitle} body={card.cardText} key={index} height="200px" />
                )
            )}
          </Stack>
          <Stack sx={{ mt: { xs: '0px', md: '128px !important' } }} direction="column" spacing={3} justifyContent="center">
            {LANGUAGE_CARDS.map(
              (card, index) =>
                index >= Math.ceil((LANGUAGE_CARDS.length * 2) / 3) && (
                  <WexcuteCard icon={card.cardIcon} title={card.cardTitle} body={card.cardText} key={index} height="200px" />
                )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurExpertise;
