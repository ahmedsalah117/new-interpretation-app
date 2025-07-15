import styles from './style.module.scss';
import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import ServiceCard from './ServiceCard/ServiceCard';
import ProcessStep from './ProcessStep/ProcessStep';
import CallToAction from './CallToAction/CallToAction';

const ServicesNew = () => {
  const { t: translate } = useTranslation<any>();

  const SERVICES = [
    {
      icon: '/icons/services/medical-interpretation-icon.svg',
      title: 'Medical Interpretation',
      description: 'For appointments, consultations, and medical documents.',
    },
    {
      icon: '/icons/services/legal-interpretation-icon.svg',
      title: 'Legal Interpretation',
      description: 'For court hearings, depositions, and client meetings.',
    },
    {
      icon: '/icons/services/business-interpretation-icon.svg',
      title: 'Business Interpretation',
      description: 'For conferences, negotiations, and multilingual meetings.',
    },
    {
      icon: '/icons/services/event-interpretation-icon.svg',
      title: 'Event Interpretation',
      description: 'For conferences, trade shows, and international summits.',
    },
    {
      icon: '/icons/services/remote-interpretation-icon.svg',
      title: 'Remote Interpretation',
      description: 'Over-the-phone and video remote interpretation services.',
    },
    {
      icon: '/icons/services/document-translation-icon.svg',
      title: 'Document Translation',
      description: 'Translation of legal, medical, and technical documents.',
    },
  ];

  const PROCESS_STEPS = [
    {
      stepNumber: 1,
      title: 'Request Service',
      description: 'Submit your request online with your specific needs and language pair.',
    },
    {
      stepNumber: 2,
      title: 'Consultation',
      description: "We'll connect with you to understand your needs and match you with the right interpreter.",
    },
    {
      stepNumber: 3,
      title: 'Interpretation Service',
      description: 'Our interpreter facilitates clear communication during your session.',
    },
    {
      stepNumber: 4,
      title: 'Follow-up',
      description: 'After the service, we request feedback and address any additional needs.',
    },
  ];

  const handleLearnMore = (serviceTitle: string) => {
    // Handle learn more click - could navigate to detailed service page
    console.log(`Learn more clicked for: ${serviceTitle}`);
  };

  const handleBookNow = () => {
    // Handle book now click - could open booking form or navigate to contact page
    console.log('Book now clicked');
  };

  return (
    <Stack className={styles['section-container']}>
      <Stack className={styles['section-content']} spacing="120px">
        {/* Our Services Section */}
        <Stack spacing="80px" maxWidth="1200px" width="100%" pt="60px">
          <Stack direction={{ xs: 'column' }} alignItems={{ xs: 'flex-start', lg: 'center' }} spacing={{ xs: 3, lg: '40px' }}>
            <Typography
              fontSize={{ xs: '32px', lg: '48px' }}
              lineHeight="60px"
              fontWeight={700}
              className={styles['services-header']}
              maxWidth={{ xs: '100%', lg: '400px' }}
            >
              Our Services
            </Typography>

            <Typography
              fontSize="20px"
              fontWeight={400}
              lineHeight="32px"
              color="#666666"
              maxWidth={{ xs: '100%', lg: '800px' }}
              textAlign={'center'}
            >
              We provide comprehensive interpretation and translation services to break down language barriers and facilitate clear
              communication across diverse industries and settings.
            </Typography>
          </Stack>

          <Stack direction="row" flexWrap="wrap" justifyContent="space-between" gap="22px" maxWidth="1200px">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onLearnMore={() => handleLearnMore(service.title)}
              />
            ))}
          </Stack>
        </Stack>

        {/* Our Interpretation Process Section */}
        <Stack spacing="80px" maxWidth="1200px" width="100%">
          <Stack spacing="24px" alignItems="center" textAlign="center">
            <Typography fontSize={{ xs: '32px', lg: '48px' }} lineHeight="60px" fontWeight={700} className={styles['process-header']}>
              Our Interpretation Process
            </Typography>

            <Typography fontSize="20px" fontWeight={400} lineHeight="32px" color="#666666" maxWidth="800px">
              Quality and accuracy are at the heart of everything we do.
            </Typography>
          </Stack>

          <Stack direction={{ xs: 'column', lg: 'row' }} flexWrap="wrap" gap="22px" justifyContent="center" alignItems={'stretch'}>
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep maxWidth='280px' stepNumber={step.stepNumber} title={step.title} description={step.description} />
            ))}
          </Stack>
        </Stack>

        {/* Call to Action Section */}
        <Stack maxWidth="1200px" width="100%">
          <CallToAction
            title="Ready to break language barriers?"
            subtitle="Book your interpreter today for a seamless communication experience."
            buttonText="Book Now"
            onButtonClick={handleBookNow}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesNew;
