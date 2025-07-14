import { Stack, Typography } from '@mui/material';
import styles from './style.module.scss';
import React from 'react';
import WexcuteCard from '@/components/Common/WexcuteCard/WexcuteCard';
import { useTranslation } from 'next-i18next';

const HowWeWork = () => {
  const { t: translate } = useTranslation();

  const HowWeWorkCards = [
    {
      cardIcon: '/images/consultation-icon.svg',
      cardText: `${translate('company:howWeWork:consultation:body')}`,
      cardTitle: `${translate('company:howWeWork:consultation:title')}`,
    },
    {
      cardIcon: '/images/project-proposal-icon.svg',
      cardText: `${translate('company:howWeWork:projectProposal:body')}`,
      cardTitle: `${translate('company:howWeWork:projectProposal:title')}`,
    },
    {
      cardIcon: '/images/discovery-icon.svg',
      cardText: `${translate('company:howWeWork:discovery:body')}`,
      cardTitle: `${translate('company:howWeWork:discovery:title')}`,
    },
    {
      cardIcon: '/images/design-icon.svg',
      cardText: `${translate('company:howWeWork:design:body')}`,
      cardTitle: `${translate('company:howWeWork:design:title')}`,
    },
    {
      cardIcon: '/images/development-icon.svg',
      cardText: `${translate('company:howWeWork:development:body')}`,
      cardTitle: `${translate('company:howWeWork:development:title')}`,
    },
    {
      cardIcon: '/images/deployment-icon.svg',
      cardText: `${translate('company:howWeWork:deployment:body')}`,
      cardTitle: `${translate('company:howWeWork:deployment:title')}`,
    },
    {
      cardIcon: '/images/support-icon.svg',
      cardText: `${translate('company:howWeWork:support:body')}`,
      cardTitle: `${translate('company:howWeWork:support:title')}`,
    },
  ];

  return (
    <Stack className="section-container">
      <Stack alignItems={'center'} spacing={{ xs: 5, lg: '112px' }} className="section-content">
        <Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'flex-start'} width="100%" justifyContent={'center'} spacing={2}>
          <Typography
            fontSize={{ xs: '32px', lg: '48px' }}
            lineHeight="56px"
            fontWeight={700}
            width="100%"
            maxWidth={{ xs: '100%', lg: '390px' }}
            className="how-we-work-title"
          >
            {translate('company:howWeWork:title')}
          </Typography>

          <Typography maxWidth="893px" width="100%" fontSize="24px" fontWeight={400} lineHeight="38px">
            {translate('company:howWeWork:body')}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }} flexWrap="wrap" useFlexGap>
          {HowWeWorkCards.map((card, index) => (
            <WexcuteCard
              key={index}
              icon={card.cardIcon}
              title={card.cardTitle}
              body={card.cardText}
              width="100%"
              align="start"
              justify="start"
              maxWidth="384px"
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HowWeWork;
