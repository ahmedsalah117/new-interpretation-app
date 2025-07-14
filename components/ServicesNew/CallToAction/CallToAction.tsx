import React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import { scrollToTargetById } from '@/utils/helpers';

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <Stack
      sx={{
        padding: '64px 40px',
        background: 'linear-gradient(135deg, #03adb5 0%, #e41469 100%)',
        borderRadius: '20px',
        textAlign: 'center',
      }}
      spacing={4}
      alignItems="center"
    >
      <Typography fontSize={{ xs: '32px', lg: '48px' }} fontWeight={700} lineHeight="60px" color="white" maxWidth="800px">
        {title}
      </Typography>

      <Typography fontSize="20px" fontWeight={400} lineHeight="32px" color="white" maxWidth="600px" sx={{ opacity: 0.9 }}>
        {subtitle}
      </Typography>

      <Button
        variant="contained"
        onClick={()=>scrollToTargetById("footer")}
        sx={{
          backgroundColor: 'white',
          color: '#03adb5',
          fontWeight: 600,
          padding: '16px 32px',
          borderRadius: '12px',
          textTransform: 'none',
          fontSize: '18px',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        {buttonText}
      </Button>
    </Stack>
  );
};

export default CallToAction; 