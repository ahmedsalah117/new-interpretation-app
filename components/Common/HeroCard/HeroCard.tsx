
import { useWindowSize } from '../../../hooks/useWindowSize';
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { event } from 'nextjs-google-analytics';

interface Props {
  title: string;
  subtitle?: string;
  backgroundImageUrl: string;
  styleProps?: React.CSSProperties;
  hasButton?: boolean;
  heroCardHeight?: string;
}

const HeroCard: React.FC<Props> = ({ title, subtitle, backgroundImageUrl, styleProps, hasButton = true, heroCardHeight = '90vh' }) => {
  const { isMobileView, isTabletView } = useWindowSize();
  const { push } = useRouter();
  const { t: translate } = useTranslation();

  const scrollToTargetById = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 76;
    const elementPosition = element?.getBoundingClientRect().top as number;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleContactUs = () => {
    event('lets_talk_hero_btn_click', {
      category: 'Contact',
      action: 'Click',
      label: 'Lets talk Hero Button',
    });

    scrollToTargetById('footer');
  };

  return (
    <Stack
      className="section-container hero-card"
      sx={{
        minHeight: '0px',
        height: heroCardHeight,
        maxHeight: { sm: '90%', lg: '900px' },
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: { xs: '0px 0px 40px 40px', sm: '0px 0px 80px 80px', lg: '0px 0px 100px 100px' },
      }}
    >
      <Stack
        className="section-content"
        justifyContent="center"
        alignItems={{ xs: 'flex-start', lg: 'flex-start' }}
        gap={7}
        sx={{
          textAlign: { xs: 'start', lg: 'start' },
          whiteSpace: isMobileView ? 'normal' : 'break-spaces',
          ...styleProps,
        }}
      >
        <Stack className="hero-content-wrapper" gap={3} alignSelf={'flex-start'} pt="56px">
          <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }}>
            <Typography
              className="content-title"
              sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem', xl: '5rem' }, fontWeight: 700, marginBottom: '1rem' }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                className="content-subtitle"
                color="white"
                sx={{ fontSize: { xs: '1.5rem', md: '2rem', xl: '2rem' }, fontWeight: 500 }}
              >
                {subtitle}
              </Typography>
            )}
            <Stack mt="32px">
              {hasButton && (
                <Button
                  onClick={handleContactUs}
                  variant="contained"
                  sx={{
                    display: 'flex',
                    width: { xs: '200px', sm: '220px', md: '300px' },
                    height: { xs: '36px', sm: '42px', md: '64px' },
                    padding: '8px 24px',
                    borderRadius: '100px',
                    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04)',
                    fontSize: { xs: '16px', md: '24px' },
                    fontWeight: 600,
                    // background: 'linear-gradient(302deg, #03adb5 8.02%, darkred 78.29%)',
                    background: 'linear-gradient(302deg, darkred 30.02%, #03adb5  78.29%)',
                  }}
                >
                  Learn More
                </Button>
              )}
            </Stack>
          </motion.div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroCard;
