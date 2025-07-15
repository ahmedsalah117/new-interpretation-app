import styles from './style.module.scss';
import React, { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, timelineItemClasses } from '@mui/lab';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const BackgroundImageUrl = '/images/how-it-works-bg.png';

const HowItWorks = () => {
  const { isMobileView } = useWindowSize();
  const timelinePosition = isMobileView ? 'right' : 'alternate';
  const { t: translate } = useTranslation<any>();
  const {
    query: { scrollId },
  } = useRouter();

  const HowItWorksCards = [
    {
      id: 1,
      isReversed: false,
      cardTitleNumber: `${translate('home:howItWorks:step')} 1`,
      cardText: `${translate('home:howItWorks:discover:body')}`,
      cardTitle: `${translate('home:howItWorks:discover:title')}`,
    },
    {
      id: 2,
      isReversed: true,
      cardTitleNumber: `${translate('home:howItWorks:step')} 2`,
      cardText: `${translate('home:howItWorks:design:body')}`,
      cardTitle: `${translate('home:howItWorks:design:title')}`,
    },
    {
      id: 3,
      isReversed: false,
      cardTitleNumber: `${translate('home:howItWorks:step')} 3`,
      cardText: `${translate('home:howItWorks:develop:body')}`,
      cardTitle: `${translate('home:howItWorks:develop:title')}`,
    },
    {
      id: 4,
      isReversed: true,
      cardTitleNumber: `${translate('home:howItWorks:step')} 4`,
      cardText: `${translate('home:howItWorks:deliver:body')}`,
      cardTitle: `${translate('home:howItWorks:deliver:title')}`,
    },
  ];

  useEffect(() => {
    if (scrollId) {
      const scrollToElement = () => {
        const element = document.getElementById('how-it-works');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      scrollToElement();
    }
  }, [scrollId]);

  return (
    <Stack id="how-it-works" className="section-container">
      <Stack spacing={6} justifyContent="center" alignItems="center" className="section-content">
        <Stack
          sx={{
            backgroundImage: `url(${BackgroundImageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '20px',
            py: '56px',
          }}
        >
          <Stack spacing={2} px={2} alignItems="center">
            <Typography
              align="center"
              fontSize={{ xs: '32px', lg: '48px' }}
              lineHeight="56px"
              fontWeight={700}
              className="how-it-works-title"
              width={'100%'}
              maxWidth="343px"
            >
              {translate('home:howItWorks:title')}
            </Typography>

            <Typography align="center" className="how-it-works-subtitle" fontSize="24px" fontWeight={400} lineHeight="32px">
              {translate('home:howItWorks:subtitle')}
            </Typography>
          </Stack>

          <Timeline
            position={timelinePosition}
            sx={
              isMobileView
                ? {
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }
                : {}
            }
          >
            {HowItWorksCards.map((card) => (
              <TimelineItem key={card.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" sx={{ width: '24px', height: '24px', borderColor: '#5d6571' }}></TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: 'transparent',
                      border: '1px dashed',
                      borderColor: '#5d6571',
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack spacing={1}>
                    <Typography
                      color="#000000"
                      align={isMobileView ? 'left' : card.isReversed ? 'right' : 'left'}
                      fontWeight={400}
                      fontSize="14px"
                      lineHeight="22px"
                    >
                      {card.cardTitleNumber}
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="22px"
                      align={isMobileView ? 'left' : card.isReversed ? 'right' : 'left'}
                      color="#000000"
                    >
                      {card.cardTitle}
                    </Typography>
                    <Typography
                      fontSize="16px"
                      fontWeight={400}
                      lineHeight="22px"
                      align={isMobileView ? 'left' : card.isReversed ? 'right' : 'left'}
                      color="#333333"
                    >
                      {card.cardText}
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HowItWorks;
