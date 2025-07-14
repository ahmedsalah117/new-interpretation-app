import React from 'react';
import { Stack, Typography, Box } from '@mui/material';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  maxWidth?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, description, maxWidth }) => {
  return (
    <div
      style={{
        padding: '24px',
        borderRadius: '16px',
        border: '1px solid #DFE6F0',
        backgroundColor: 'white',
        width: '100%',
        maxWidth: maxWidth || '100%',
      }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'center', md: 'center' }} >
        <Box
          sx={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#03adb5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Typography fontSize="24px" fontWeight={700} color="white">
            {stepNumber}
          </Typography>
        </Box>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography fontSize="20px" fontWeight={600} lineHeight="28px" color="#232932">
            {title}
          </Typography>
        </Stack>
      </Stack>
      <Typography fontSize="16px" fontWeight={400} lineHeight="24px" color="#666666" mt={'1rem'}>
        {description}
      </Typography>
    </div>
  );
};

export default ProcessStep; 