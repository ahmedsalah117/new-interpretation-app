import React from 'react';
import styles from './style.module.scss';
import { Stack, Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import CheckIcon from '@mui/icons-material/Check';
import { event } from 'nextjs-google-analytics';
const Pricing = () => {
  const { t: translate } = useTranslation<any>();

  const PRICING_TIERS = [
    {
      name: 'Standard',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 team members',
        'Basic interpretation services',
        'Email support',
        'Standard response time',
        'Basic analytics'
      ],
      buttonText: 'Choose Plan',
      popular: false,
      buttonVariant: 'outlined' as const
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Most popular choice for growing businesses',
      features: [
        'Up to 20 team members',
        'Advanced interpretation services',
        'Priority support',
        'Faster response time',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
      ],
      buttonText: 'Choose Plan',
      popular: true,
      buttonVariant: 'contained' as const
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Custom solutions for large organizations',
      features: [
        'Unlimited team members',
        'Enterprise-grade interpretation',
        '24/7 dedicated support',
        'Instant response time',
        'Custom analytics dashboard',
        'White-label solutions',
        'API access',
        'Custom training sessions'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      buttonVariant: 'outlined' as const
    }
  ];

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

    const handleLetsTalk = () => {
      event('lets_talk_header_btn_click', {
        category: 'Contact',
        action: 'Click',
        label: 'Lets talk Header Button',
      });

      scrollToTargetById('footer');
    };

  return (
    <Stack className="section-container" direction="column" spacing={6}>
      <Stack className="section-content" direction="column" spacing={4} alignItems="center" sx={{maxWidth: '100% !important'}}>
        <Stack direction="column" spacing={2} alignItems="center" maxWidth="600px">
          <Typography
            fontSize={{ xs: '32px', lg: '48px' }}
            fontWeight={700}
            lineHeight="56px"
            className="pricing-header"
            textAlign="center"
          >
            Simple, transparent pricing
          </Typography>
          <Typography 
            fontSize="20px" 
            fontWeight={400} 
            lineHeight="32px" 
            textAlign="center"
            color="#666"
          >
            Choose the perfect plan for your interpretation needs
          </Typography>
        </Stack>

        <Stack 
          direction={{ xs: 'column', lg: 'row' }} 
          spacing={4} 
          alignItems="center" 
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          {PRICING_TIERS.map((tier, index) => (
            <Box
              key={index}
              className={`pricing-card ${tier.popular ? 'popular' : ''}`}
              sx={{
                position: 'relative',
                width: { xs: '100%', md: '320px' },
                maxWidth: '320px'
              }}
            >
              {tier.popular && (
                <Box className="popular-badge">
                  <Typography fontSize="12px" fontWeight={600} color="white">
                    MOST POPULAR
                  </Typography>
                </Box>
              )}
              
              <Stack 
                direction="column" 
                spacing={3} 
                className="pricing-content"
                sx={{ p: 4, height: '100%' }}
              >
                <Stack direction="column" spacing={1}>
                  <Typography fontSize="24px" fontWeight={700} color="#232932">
                    {tier.name}
                  </Typography>
                  <Typography fontSize="14px" color="#666" lineHeight="20px">
                    {tier.description}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="baseline" spacing={0.5}>
                  <Typography fontSize="48px" fontWeight={700} color="#232932">
                    {tier.price}
                  </Typography>
                  {tier.period && (
                    <Typography fontSize="16px" color="#666">
                      {tier.period}
                    </Typography>
                  )}
                </Stack>

                <Stack direction="column" spacing={2}>
                  {tier.features.map((feature, featureIndex) => (
                    <Stack key={featureIndex} direction="row" spacing={2} alignItems="center">
                      <CheckIcon sx={{ color: '#03adb5', fontSize: 20 }} />
                      <Typography fontSize="14px" color="#232932" lineHeight="20px">
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  onClick={handleLetsTalk}
                  variant={tier.buttonVariant}
                  size="large"
                  fullWidth
                  className={`pricing-button ${tier.popular ? 'popular' : ''}`}
                  sx={{
                    mt: 'auto',
                    py: 1.5,
                    fontSize: '16px',
                    fontWeight: 600,
                    borderRadius: '8px',
                    textTransform: 'none'
                  }}
                >
                  {tier.buttonText}
                </Button>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Pricing;
