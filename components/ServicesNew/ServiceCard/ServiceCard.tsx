import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { scrollToTargetById } from '@/utils/helpers';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onLearnMore }) => {
  return (
    <Stack
      sx={{
        padding: '32px',
        border: '1px solid #DFE6F0',
        borderRadius: '20px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)',
        },
      }}
      spacing={3}
      width="100%"
      maxWidth="380px"
    >
      <Stack alignItems="center" spacing={2}>
        <Image src={icon} alt={title} width={64} height={64} />
        <Typography fontSize="24px" fontWeight={700} lineHeight="32px" textAlign="center" color="#232932">
          {title}
        </Typography>
      </Stack>

      <Typography fontSize="16px" fontWeight={400} lineHeight="24px" textAlign="center" color="#666666">
        {description}
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          scrollToTargetById('footer')
        }}
        sx={{
          backgroundColor: '#03adb5',
          color: 'white',
          fontWeight: 600,
          padding: '12px 24px',
          borderRadius: '8px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#028a91',
          },
        }}
      >
        Learn More
      </Button>
    </Stack>
  );
};

export default ServiceCard; 