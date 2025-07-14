import React from 'react';
import styles from './style.module.scss';
import { Stack, Typography, Box } from '@mui/material';
import WexcuteCard from '@/components/Common/WexcuteCard/WexcuteCard';
import Image from 'next/image';

const OurValues = () => {
  const OurValuesCards = [
    {
      cardIcon: '/icons/ourValues/accessibility-icon.svg',
      cardText: 'We believe language services should be available to all, regardless of location or budget.',
      cardTitle: 'Accessibility',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      cardIcon: '/icons/ourValues/excellence-icon.svg',
      cardText: 'We strive for the highest quality in every interaction, maintaining strict standards for our interpreters.',
      cardTitle: 'Excellence',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      cardIcon: '/icons/ourValues/responsiveness-icon.svg',
      cardText: 'We understand that communication needs can be urgent, so we provide swift, reliable service.',
      cardTitle: 'Responsiveness',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
  ];

  return (
    <Box className="our-values-section">
      <Stack className="section-container" alignItems={'center'} spacing={8}>
        {/* Header Section */}
        <Stack alignItems={'center'} spacing={6} textAlign="center" maxWidth="900px">
          <Box 
            className="section-badge"
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50px',
                zIndex: -1,
                opacity: 0.3,
                filter: 'blur(8px)',
              }
            }}
          >
            <Typography 
              variant="overline" 
              fontWeight={700} 
              letterSpacing="3px"
              sx={{
                fontSize: '13px',
                textTransform: 'uppercase',
                color: 'white',
                position: 'relative',
                zIndex: 1,
              }}
            >
              OUR VALUES
            </Typography>
          </Box>
          
          <Typography
            fontSize={{ xs: '40px', sm: '48px', md: '56px', lg: '64px' }}
            fontWeight={800}
            lineHeight="1.1"
            className="values-title"
            sx={{
              background: 'linear-gradient(135deg, #03adb5 0%, #e41469 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              maxWidth: '100%',
              wordWrap: 'break-word',
              hyphens: 'auto',
            }}
          >
            What drives us every day
          </Typography>

          <Typography 
            fontSize={{ xs: '18px', sm: '19px', md: '20px' }}
            fontWeight={400} 
            lineHeight="1.7"
            color="text.secondary"
            maxWidth="700px"
            sx={{ 
              opacity: 0.85, 
              textAlign: 'center',
              letterSpacing: '0.3px',
            }}
          >
            Our core principles guide every decision we make and every service we provide
          </Typography>
        </Stack>

        {/* Values Cards */}
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 4, lg: 6 }}
          justifyContent="center"
          alignItems="stretch"
          width="100%"
          maxWidth="1200px"
        >
          {OurValuesCards.map((card, index) => (
            <Box
              key={index}
              className="value-card-wrapper"
              sx={{
                flex: 1,
                minWidth: { xs: '100%', lg: '320px' },
                maxWidth: { lg: '380px' },
              }}
            >
              <Stack
                className="value-card"
                spacing={3}
                sx={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  height: '100%',
                  border: '1px solid rgba(223, 230, 240, 0.5)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.1s',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                    borderColor: 'rgba(223, 230, 240, 0.8)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: card.gradient,
                    borderRadius: '24px 24px 0 0',
                  },
                }}
              >
                {/* Icon Container */}
                <Box
                  sx={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: card.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Image 
                    src={card.cardIcon} 
                    alt={card.cardTitle}
                    width={60}
                    height={60}
                    style={{ 
                      width: '60px', 
                      height: '60px',
                    }}
                  />
                </Box>

                {/* Content */}
                <Stack spacing={2}>
                  <Typography
                    fontSize="24px"
                    fontWeight={700}
                    lineHeight="1.3"
                    color="text.primary"
                  >
                    {card.cardTitle}
                  </Typography>
                  
                  <Typography
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="1.6"
                    color="text.secondary"
                    sx={{ opacity: 0.8 }}
                  >
                    {card.cardText}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default OurValues;
