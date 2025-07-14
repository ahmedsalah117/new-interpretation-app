import { Button, Stack, Typography } from '@mui/material';
import styles from './style.module.scss';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';

const WhoWeAre = () => {
  const router = useRouter();
  const { t: translate } = useTranslation();

  const handleExploreProjectsClick = () => {
    event('explore_projects_btn_click', {
      category: 'Projects',
      action: 'Click',
      label: 'Explore Projects Button',
    });

    router.push('/projects');
  };

  return (
    <Stack className="section-container" pt="120px">
      <Stack className="section-content" spacing="120px">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing="126px">
          <Stack spacing={3} maxWidth="794px" width="100%" justifyContent="center">
            <Typography
              fontSize={{ xs: '32px', lg: '48px' }}
              lineHeight="56px"
              fontWeight={700}
              className="who-we-are-header"
              maxWidth={'487px'}
              width="100%"
            >
              {translate('company:whoWeAre:title')}
            </Typography>

            <Typography fontSize="24px" fontWeight={400} lineHeight="38px" color="#232932">
              {translate('company:whoWeAre:body')}
            </Typography>
          </Stack>

          <Stack
            spacing={{ xs: 5, sm: '82px' }}
            direction={{ xs: 'row', md: 'column' }}
            useFlexGap
            flexWrap={'wrap'}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent="center"
            maxWidth={{ xs: '100%', md: '250px' }}
            width="100%"
          >
            <Stack spacing={2}>
              <Typography
                fontWeight={700}
                fontSize="64px"
                lineHeight="78px"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                30<span style={{ color: '#E41469' }}>+</span>
              </Typography>

              <Typography
                fontWeight={400}
                fontSize="24px"
                color="#5D6571"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Projects
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                fontWeight={700}
                fontSize="64px"
                lineHeight="78px"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                20<span style={{ color: '#E41469' }}>+</span>
              </Typography>

              <Typography
                fontWeight={400}
                fontSize="24px"
                color="#5D6571"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Happy Clients
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                fontWeight={700}
                fontSize="64px"
                lineHeight="78px"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                4<span style={{ color: '#E41469' }}>+</span>
              </Typography>

              <Typography
                fontWeight={400}
                fontSize="24px"
                color="#5D6571"
                sx={{
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Years of Experience
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack width="100%">
          <Stack width="100%" alignItems="center" spacing={3}>
            <Stack width="100%" sx={{ borderRadius: '16px', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src={'/images/colleagues-giving-fist-bump.png'}
                alt={'photo'}
                width={1220}
                height={420}
                style={{ borderRadius: '16px', objectFit: 'cover' }}
              />
            </Stack>
            <Typography fontWeight={400} fontSize="24px" lineHeight="38px" color="#232932" align="center">
              {translate('company:whoWeAre:photoDescription')}
            </Typography>

            <Button
              size="large"
              variant="contained"
              sx={{
                maxWidth: '350px',
                width: '100%',
                borderRadius: '100px',
                height: '64px',
                fontSize: { xs: '20px', lg: '24px' },
                fontWeight: 600,
              }}
              onClick={handleExploreProjectsClick}
            >
              {translate('company:whoWeAre:callToAction')}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhoWeAre;
