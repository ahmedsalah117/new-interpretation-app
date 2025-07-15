import { Button, Stack, Typography, Box } from '@mui/material';
import styles from './style.module.scss';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';

const OurStory = () => {
  const router = useRouter();
  const { t: translate } = useTranslation<any>();

  const handleExploreProjectsClick = () => {
    event('explore_projects_btn_click', {
      category: 'Projects',
      action: 'Click',
      label: 'Explore Projects Button',
    });

    router.push('/projects');
  };

  return (
    <Stack className="section-container" pt="50px">
      <Stack className="section-content" spacing="80px">
        {/* Header Section */}
        <Stack width="100%" alignItems="center" spacing={4}>
          <Typography
            fontSize={{ xs: '14px', md: '2rem' }}
            fontWeight={600}
            color="#E41469"
            letterSpacing="2px"
            textTransform="uppercase"
            sx={{
              background: 'linear-gradient(90deg, #E41469 0%, #03ADB5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Story
          </Typography>
          
          <Typography
            fontSize={{ xs: '28px', md: '36px', lg: '48px' }}
            fontWeight={700}
            lineHeight="1.2"
            textAlign="center"
            maxWidth="800px"
            sx={{
              background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Bridging communication gaps since 2020
          </Typography>
        </Stack>

        {/* Large Hero Image Section */}
        <Stack width="100%" alignItems="center">
          <Box
            sx={{
              width: '100%',
              maxWidth: '1400px',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-30px',
                left: '-30px',
                right: '30px',
                bottom: '30px',
                background: 'linear-gradient(135deg, #03ADB5 0%, #E41469 100%)',
                borderRadius: '30px',
                zIndex: -1,
                opacity: 0.15,
              }
            }}
          >
            <Box
              sx={{
                borderRadius: '30px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(3, 173, 181, 0.1) 0%, rgba(228, 20, 105, 0.1) 100%)',
                  opacity: 0.4,
                  pointerEvents: 'none',
                }
              }}
            >
              <Image
                src={'/images/colleagues-giving-fist-bump.png'}
                alt={'Our team collaborating and celebrating success'}
                width={1400}
                height={1120}
                style={{ 
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  display: 'block'
                }}
                priority
              />
            </Box>
          </Box>
        </Stack>

        {/* Content Section - Now below the image */}
        <Stack 
          direction={{ xs: 'column', lg: 'row' }} 
          spacing={{ xs: 6, lg: 8 }}
          alignItems="center"
          width="100%"
        >
          {/* Text Content */}
          <Stack spacing={4} maxWidth="600px" width="100%">
            <Typography 
              fontSize={{ xs: '16px', md: '18px' }}
              lineHeight="1.8"
              color="#232932"
              textAlign="justify"
              sx={{
                '&::first-letter': {
                  fontSize: '3.5em',
                  fontWeight: 700,
                  float: 'left',
                  lineHeight: 1,
                  marginRight: '8px',
                  marginTop: '4px',
                  background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }
              }}
            >
              Founded in 2020, InterpretAI began with a simple idea: to make professional interpretation services accessible to everyone, regardless of location or budget. What started as a small team of dedicated linguists has grown into a network of over 500 professional interpreters covering more than 50 languages, supported by our cutting-edge technology platform. Today, we serve thousands of clients across healthcare, legal, business, and community sectors, continuously expanding our services to meet the evolving needs of our diverse clientele.
            </Typography>

            {/* Stats Section */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 3, sm: 4 }}
              justifyContent="space-between"
              sx={{
                background: 'linear-gradient(135deg, rgba(3, 173, 181, 0.05) 0%, rgba(228, 20, 105, 0.05) 100%)',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(3, 173, 181, 0.1)',
              }}
            >
              <Stack alignItems="center" spacing={1}>
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: '36px', md: '48px' }}
                  sx={{
                    background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  500+
                </Typography>
                <Typography
                  fontWeight={500}
                  fontSize="14px"
                  color="#5D6571"
                  textAlign="center"
                >
                  Professional Interpreters
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing={1}>
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: '36px', md: '48px' }}
                  sx={{
                    background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  50+
                </Typography>
                <Typography
                  fontWeight={500}
                  fontSize="14px"
                  color="#5D6571"
                  textAlign="center"
                >
                  Languages Covered
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing={1}>
                <Typography
                  fontWeight={700}
                  fontSize={{ xs: '36px', md: '48px' }}
                  sx={{
                    background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  4+
                </Typography>
                <Typography
                  fontWeight={500}
                  fontSize="14px"
                  color="#5D6571"
                  textAlign="center"
                >
                  Years of Excellence
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* Additional Content Space - Could be used for more text, testimonials, or another image */}
          <Stack 
            spacing={4} 
            maxWidth="600px" 
            width="100%"
            sx={{
              background: 'linear-gradient(135deg, rgba(3, 173, 181, 0.02) 0%, rgba(228, 20, 105, 0.02) 100%)',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid rgba(3, 173, 181, 0.05)',
            }}
          >
            <Typography
              fontSize={{ xs: '20px', md: '24px' }}
              fontWeight={600}
              color="#232932"
              textAlign="center"
            >
              Our Mission
            </Typography>
            <Typography
              fontSize={{ xs: '16px', md: '18px' }}
              lineHeight="1.7"
              color="#5D6571"
              textAlign="justify"
            >
              We believe that language should never be a barrier to understanding, care, or opportunity. Our mission is to bridge communication gaps through innovative technology and human expertise, ensuring that every voice is heard and every message is understood with clarity and cultural sensitivity.
            </Typography>
          </Stack>
        </Stack>

        {/* Call to Action */}
        <Stack width="100%" alignItems="center" spacing={3}>
          <Button
            size="large"
            variant="contained"
            sx={{
              maxWidth: '350px',
              width: '100%',
              borderRadius: '100px',
              height: '64px',
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 600,
              background: 'linear-gradient(135deg, #03ADB5 0%, #E41469 100%)',
              boxShadow: '0 8px 24px rgba(3, 173, 181, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #E41469 0%, #03ADB5 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 32px rgba(228, 20, 105, 0.4)',
              }
            }}
            onClick={handleExploreProjectsClick}
          >
            Explore Our Projects
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurStory;
