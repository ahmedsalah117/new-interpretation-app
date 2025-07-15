import React from 'react';
import styles from './style.module.scss';
import { Stack, Typography } from '@mui/material';
import WexcuteCard from '@/components/Common/WexcuteCard/WexcuteCard';
import { useTranslation } from 'next-i18next';
import BalanceIcon from '@mui/icons-material/Balance';
const OurServices = () => {
  const { t: translate } = useTranslation<any>();

  const SERVICES_CARDS = [
    {
      cardIcon: '/icons/services/on-demand-interpretation-icon.svg',
      cardText: `Connect with a professional interpreter in seconds, anytime, anywhere`,
      cardTitle: `On-demand Interpretation`,
    },
    {
      cardIcon: '/icons/services/legal-interpretation-icon.svg',
      // cardIcon: <BalanceIcon />,

      cardText: `Certified interpreters for legal proceedings, ensuring accuracy and confidentiality`,
      cardTitle: `Legal Interpretation`,
    },
    {
      cardIcon: '/icons/services/enterprise-interpretation-icon.svg',
      cardText: `Scalable solutions for businesses to communicate globally with clients and partners`,
      cardTitle: `Enterprise Interpretation`,
    },
  ];

  return (
    <Stack className="section-container" direction={{ xs: 'column', lg: 'row' }}>
      <Stack className="section-content" direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between">
        <Stack
          direction="column"
          spacing={3}
          alignItems={{ xs: 'flex-start', lg: 'center' }}
          justifyContent={'center'}
          maxWidth={{ xs: '100%', lg: '480px' }}
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
            Our Services
          </Typography>
{/* 
          <Typography fontSize="24px" fontWeight={400} lineHeight="38px" width="100%">
            {translate('home:ourExpertise:body')}
          </Typography> */}
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center" justifyContent="center">
          <Stack direction="column" spacing={3} justifyContent="center">
            {SERVICES_CARDS.map(
              (card, index) =>
                index < Math.ceil(SERVICES_CARDS.length / 2) && (
                  <WexcuteCard
                    icon={card.cardIcon}
                    title={card.cardTitle}
                    body={card.cardText}
                    key={index}
                    height="250px"
                    width="fit-content"
                    maxWidth="300px"
                  />
                )
            )}
          </Stack>
          <Stack sx={{ mt: { xs: '0px', md: '128px !important' } }} direction="column" spacing={3} justifyContent="center">
            {SERVICES_CARDS.map(
              (card, index) =>
                index >= Math.ceil(SERVICES_CARDS.length / 2) && (
                  <WexcuteCard
                    icon={card.cardIcon}
                    title={card.cardTitle}
                    body={card.cardText}
                    key={index}
                    height="250px"
                    width="fit-content"
                    maxWidth="300px"
                  />
                )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurServices;
