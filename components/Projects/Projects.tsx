import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const ProjectsPage = () => {
  const { t: translate } = useTranslation<any>();
  const { isMobileView, isTabletView } = useWindowSize();
  const { query } = useRouter();
  const innerBackgroundImageUrl = '/images/projects-card-inner-bg.png';

  const projectsCards = [
    {
      id: 2,
      isReversed: true,
      cardIcon: '/images/nissan.svg',
      cardTitle: `${translate('projects:nissan:cardTitle')}`,
      cardSecondaryTitle: `${translate('projects:nissan:cardSecondaryTitle')}`,
      cardTertiaryTitle: `${translate('projects:nissan:cardTertiaryTitle')}`,
      cardBackground: '#e0e0e0',
      cardSecondaryText: `${translate('projects:nissan:cardSecondaryText')}`,
      cardTertiaryText: `${translate('projects:nissan:cardTertiaryText')}`,
      cardText: `${translate('projects:nissan:cardText')}`,
      innerText: `${translate('projects:nissan:innerText')}`,
      headersColor: 'rgb(199,22,50)',
    },
    {
      id: 3,
      isReversed: false,
      cardIcon: '/images/whats-on-2.svg',
      cardTitle: `${translate('projects:whatsOn:cardTitle')}`,
      cardSecondaryTitle: `${translate('projects:whatsOn:cardSecondaryTitle')}`,
      cardTertiaryTitle: `${translate('projects:whatsOn:cardTertiaryTitle')}`,
      cardBackground: '#ffebee',
      cardSecondaryText: `${translate('projects:whatsOn:cardSecondaryText')}`,
      cardTertiaryText: `${translate('projects:whatsOn:cardTertiaryText')}`,
      cardText: `${translate('projects:whatsOn:cardText')}`,
      innerText: `${translate('projects:whatsOn:innerText')}`,
      headersColor: ' rgb(196,41,41)',
    },
    {
      id: 1,
      isReversed: false,
      cardIcon: '/images/lina-mockup-2.svg',
      cardTitle: `${translate('projects:lina:cardTitle')}`,
      cardSecondaryTitle: `${translate('projects:lina:cardSecondaryTitle')}`,
      cardTertiaryTitle: `${translate('projects:lina:cardTertiaryTitle')}`,
      cardBackground: '#e0f2f1',
      cardSecondaryText: `${translate('projects:lina:cardSecondaryText')}`,
      cardTertiaryText: `${translate('projects:lina:cardTertiaryText')}`,
      cardText: `${translate('projects:lina:cardText')}`,
      innerText: `${translate('projects:lina:innerText')}`,
      headersColor: 'rgb(12,87,93)',
    },
    {
      id: 4,
      isReversed: true,
      cardIcon: '/images/jeep-new.png',
      cardTitle: `${translate('projects:jeep:cardTitle')}`,
      cardSecondaryTitle: `${translate('projects:jeep:cardSecondaryTitle')}`,
      cardTertiaryTitle: `${translate('projects:jeep:cardTertiaryTitle')}`,
      cardBackground: '#fffde7',
      cardSecondaryText: `${translate('projects:jeep:cardSecondaryText')}`,
      cardTertiaryText: `${translate('projects:jeep:cardTertiaryText')}`,
      cardText: `${translate('projects:jeep:cardText')}`,
      innerText: `${translate('projects:jeep:innerText')}`,
      headersColor: 'rgb(0,0,0)',
    },
    {
      id: 5,
      isReversed: false,
      cardIcon: '/images/we.svg',
      cardTitle: `${translate('projects:telecomEgypt:cardTitle')}`,
      cardSecondaryTitle: `${translate('projects:telecomEgypt:cardSecondaryTitle')}`,
      cardTertiaryTitle: `${translate('projects:telecomEgypt:cardTertiaryTitle')}`,
      cardBackground: '#f3e5f5',
      cardSecondaryText: `${translate('projects:telecomEgypt:cardSecondaryText')}`,
      cardTertiaryText: `${translate('projects:telecomEgypt:cardTertiaryText')}`,
      cardText: `${translate('projects:telecomEgypt:cardText')}`,
      innerText: `${translate('projects:telecomEgypt:innerText')}`,
      headersColor: 'rgb(74,5,95)',
    },
    {
      id: 6,
      isReversed: true,
      cardIcon: '/images/baddel-mobile-2.svg',
      cardTitle: `${translate('projects:baddel:cardTitle')}`,
      cardSecondaryTitle: `${translate('projects:baddel:cardSecondaryTitle')}`,
      cardTertiaryTitle: `${translate('projects:baddel:cardTertiaryTitle')}`,
      cardBackground: '#e8f5e9',
      cardSecondaryText: `${translate('projects:baddel:cardSecondaryText')}`,
      cardTertiaryText: `${translate('projects:baddel:cardTertiaryText')}`,
      cardText: `${translate('projects:baddel:cardText')}`,
      innerText: `${translate('projects:baddel:innerText')}`,
      headersColor: 'rgb(87,190,117)',
    },
  ];

  const scrollToTargetAdjusted = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 76;
    const elementPosition = element?.getBoundingClientRect().top as number;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (query?.id) {
      scrollToTargetAdjusted(query.id as string);
    }
  }, [query]);

  return (
    <Stack className="section-container">
      <Stack className="section-content" spacing={7}>
        <Stack maxWidth="1200px" width="100%" className="projects-text-wrapper">
          <Typography fontSize="24px" fontWeight={400} lineHeight="46px">
            {translate('projects:body')}
          </Typography>
        </Stack>

        <Stack className="projects-cards-wrapper" maxWidth="1200px" width="100%" spacing={9}>
          {projectsCards.map((card) => (
            <Stack
              sx={{
                borderRadius: '20px',
                maxWidth: '1200px',
                width: '100%',
                padding: { xs: '32px', sm: '64px' },
                backgroundColor: `${card.cardBackground}`,
                justifyContent: 'space-between',
              }}
              id={card.id as any}
              direction={{ xs: 'column-reverse', lg: card.isReversed ? 'row' : 'row-reverse' }}
              spacing={3}
            >
              <Stack sx={{ width: '100%', maxWidth: { xs: '100%', lg: '760px' } }} spacing={3}>
                <Image
                  alt="image"
                  src={card.cardIcon}
                  width={750}
                  height={488}
                  style={{ borderRadius: '20px', objectFit: 'cover', width: '100%' }}
                />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} width="100%" justifyContent="space-between">
                  <Stack maxWidth={{ xs: '100%', lg: '352px' }} width="100%">
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="38px"
                      sx={{ minHeight: { xs: '', lg: '76px' }, overflowWrap: 'break-word' }}
                      style={{ color: card.headersColor }}
                    >
                      {card.cardSecondaryTitle}
                    </Typography>

                    <Typography fontSize="20px" fontWeight={400} lineHeight="38px">
                      {card.cardSecondaryText}
                    </Typography>
                  </Stack>

                  <Stack maxWidth={{ xs: '100%', lg: '380px' }} width="100%">
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="38px"
                      sx={{ minHeight: { xs: '', lg: '76px' }, overflowWrap: 'break-word' }}
                      style={{ color: card.headersColor }}
                    >
                      {card.cardTertiaryTitle}
                    </Typography>

                    <Typography fontSize="20px" fontWeight={400} lineHeight="38px">
                      {card.cardTertiaryText}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack maxWidth={{ xs: '100%', lg: '368px' }} width="100%" spacing={8} justifyContent="flex-start">
                <Stack spacing={2}>
                  <Typography fontWeight={700} fontSize="40px" style={{ color: card.headersColor }} lineHeight="38px">
                    {card.cardTitle}
                  </Typography>

                  <Typography fontWeight={400} fontSize="20px" lineHeight="38px">
                    {card.cardText}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    backgroundImage: `url(${innerBackgroundImageUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    alignItems: 'center',
                    height: 364,
                    justifyContent: 'center',
                    borderRadius: '20px',
                    padding: '24px',
                    display: { xs: 'none', lg: 'flex' },
                  }}
                >
                  <Typography fontSize="32px" fontWeight={300} lineHeight="64px">
                    <i>{card.innerText}</i>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectsPage;
