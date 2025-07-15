import styles from './style.module.scss';
import React from 'react';
import { Stack, Typography } from '@mui/material';
import ImagesCarousel, { CarouselImage } from '@/components/Common/ImagesCarousel/ImagesCarousel';
import { useTranslation } from 'next-i18next';

const projectsSectionCards: CarouselImage[] = [
  {
    id: 1,
    source: '/images/lina-projects.jpg',
    title: 'Lina',
    subtitle: 'Design, Mobile App, Web',
  },
  {
    id: 2,
    source: '/images/nissan-projects.jpg',
    title: 'Nissan',
    subtitle: 'Design, Mobile App, Web',
  },
  {
    id: 3,
    source: '/images/whats-on-projects.jpg',
    title: 'What’s On?',
    subtitle: 'Design, Mobile App, Web',
  },
  {
    id: 4,
    source: '/images/jeep-new.png',
    title: 'Jeep KSA',
    subtitle: 'Design, Mobile App, Web',
  },
  {
    id: 5,
    source: '/images/We-projects.jpg',
    title: 'Telecom Egypt',
    subtitle: 'Design, Mobile App, Web',
  },
  {
    id: 6,
    source: '/images/baddel-mobile-projects.jpg',
    title: 'Baddel',
    subtitle: 'Design, Mobile App, Web',
  },
];

const FeaturedProjects = () => {
  // TODO: Handle projects routing.
  // const router = useRouter();

  // const navigateToProjects = (sectionId) => {
  //   router.push({
  //     pathname: `/projects`,
  //     query: {
  //       id: sectionId,
  //     },
  //   });
  // };
  const { t: translate } = useTranslation<any>();

  return (
    <Stack className="section-container" alignItems={'center'} sx={{ overflow: 'hidden' }}>
      <Stack alignItems={'center'} spacing={{ xs: 5, lg: 6 }} className="section-content">
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          alignItems={{ xs: 'flex-start', lg: 'center' }}
          width="100%"
          justifyContent="space-between"
          spacing={3}
        >
          <Typography
            fontSize={{ xs: '32px', lg: '48px' }}
            lineHeight="56px"
            fontWeight={700}
            width="100%"
            maxWidth={{ xs: '100%', lg: '420px' }}
            className="values-title"
          >
            {translate('home:featuredProjects:title')}
          </Typography>

          <Typography maxWidth="700px" width="100%" fontSize="24px" fontWeight={400} lineHeight="38px">
            {translate('home:featuredProjects:body')}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent={{ sm: 'center', md: 'flex-start', lg: 'center' }}
          flexWrap="wrap"
          useFlexGap
        >
          <ImagesCarousel carouselImages={projectsSectionCards} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeaturedProjects;
