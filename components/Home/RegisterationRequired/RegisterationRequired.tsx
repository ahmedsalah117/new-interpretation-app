import React, { useState } from 'react';
import styles from './style.module.scss';
import { Stack, Typography, Box, TextField, Button, FormControl } from '@mui/material';
import { useTranslation } from 'next-i18next';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RegisterationRequired = () => {
  const { t: translate } = useTranslation<any>();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };

  const validateFields = () => {
    let errors: any = {};

    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    } else if (/[`~!@#$%^&*()\-_=+\[\];:'"\\|,<.>/?]/.test(formValues.name)) {
      errors.name = 'Invalid name format';
    } else {
      errors.name = '';
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Invalid email address';
    } else {
      errors.email = '';
    }

    setFormErrors(errors);
    return !Object.values(errors).some((x) => x !== '');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateFields()) {
      // Here you would typically send the data to your backend
      console.log('Registration submitted:', formValues);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormValues({ name: '', email: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <Stack className="section-container" direction="column" spacing={6} sx={{marginBottom: '100px'}}>
      <Stack className="section-content" direction="column" spacing={4} alignItems="center" sx={{maxWidth: '100% !important'}}>
        <Stack direction="column" spacing={2} alignItems="center" maxWidth="800px">
          <Typography
            fontSize={{ xs: '32px', lg: '48px' }}
            fontWeight={700}
            lineHeight="56px"
            className="registration-header"
            textAlign="center"
          >
            Registration Required
          </Typography>
          <Typography 
            fontSize="20px" 
            fontWeight={400} 
            lineHeight="32px" 
            textAlign="center"
            color="#666"
          >
            How it integrates
          </Typography>
          <Typography 
            fontSize="16px" 
            fontWeight={400} 
            lineHeight="24px" 
            textAlign="center"
            color="#666"
            maxWidth="600px"
            sx={{ mt: 2 }}
          >
            This section explains the process of signing up and integrating our professional interpretation services. 
            Get started by providing your details below.
          </Typography>
        </Stack>

        {/* Registration Form */}
        <Box
          className="registration-form-container"
          sx={{
            width: '100%',
            maxWidth: '500px',
            mt: 4
          }}
        >
          <Stack 
            direction="column" 
            spacing={3} 
            className="registration-form"
            sx={{ 
              p: 4, 
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(3, 173, 181, 0.1)'
            }}
          >
            {isSubmitted && (
              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(3, 173, 181, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(3, 173, 181, 0.3)'
                }}
              >
                <Typography fontSize="16px" fontWeight={600} color="#03adb5" textAlign="center">
                  ✓ Registration submitted successfully! We'll be in touch soon.
                </Typography>
              </Box>
            )}

            <FormControl component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <Stack spacing={3}>
                <TextField
                  required
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  type="text"
                  variant="outlined"
                  label="Full Name"
                  placeholder="Enter your full name"
                  InputProps={{
                    startAdornment: (
                      <PersonIcon sx={{ color: '#03adb5', mr: 1, fontSize: 20 }} />
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#03adb5',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#03adb5',
                      },
                    },
                  }}
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                />

                <TextField
                  required
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  type="email"
                  variant="outlined"
                  label="Email Address"
                  placeholder="Enter your email address"
                  InputProps={{
                    startAdornment: (
                      <EmailIcon sx={{ color: '#03adb5', mr: 1, fontSize: 20 }} />
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#03adb5',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#03adb5',
                      },
                    },
                  }}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 2,
                    height: '56px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: 600,
                    background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                    boxShadow: '0 4px 16px rgba(3, 173, 181, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(290deg, #0799A0 0%, #C11B5F 82.25%)',
                      boxShadow: '0 6px 20px rgba(3, 173, 181, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Register Now
                </Button>
              </Stack>
            </FormControl>
          </Stack>
        </Box>

        {/* Integration Benefits */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 6, pt: 4, borderTop: '1px solid #E0E0E0' }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box 
              sx={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#03adb5', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography fontSize="16px" fontWeight={700} color="white">
                1
              </Typography>
            </Box>
            <Typography fontSize="16px" fontWeight={500} color="#232932">
              Quick Registration
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Box 
              sx={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#03adb5', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography fontSize="16px" fontWeight={700} color="white">
                2
              </Typography>
            </Box>
            <Typography fontSize="16px" fontWeight={500} color="#232932">
              Instant Access
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Box 
              sx={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#03adb5', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography fontSize="16px" fontWeight={700} color="white">
                3
              </Typography>
            </Box>
            <Typography fontSize="16px" fontWeight={500} color="#232932">
              Start Using Services
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RegisterationRequired;
