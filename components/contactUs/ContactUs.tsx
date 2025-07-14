import React, { useState } from 'react';
import styles from './style.module.scss';
import {
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  MenuItem,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import { 
  Phone, 
  Email, 
  LocationOn, 
  Chat, 
  Twitter, 
  YouTube, 
  Facebook, 
  LinkedIn,
  Send,
  CheckCircle
} from '@mui/icons-material';

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'sales', label: 'Sales & Partnerships' },
  { value: 'support', label: 'Technical Support' },
  { value: 'interpretation', label: 'Interpretation Services' },
  { value: 'other', label: 'Other' },
];

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Box 
      sx={{ 
        width: '100%', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: '120px',
        pb: '80px'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/tile.png)',
          backgroundSize: '200px 200px',
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(3, 173, 181, 0.05) 0%, rgba(228, 20, 105, 0.05) 100%)',
          zIndex: 0,
        }}
      />

      <Box 
        className={styles["section-content"]} 
        sx={{ 
          position: 'relative',
          zIndex: 1,
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 4 
        }}
      >
        {/* Header Section */}
        <Stack spacing={3} alignItems="center" sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            fontWeight={700} 
            sx={{
              background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              lineHeight: 1.2,
            }}
          >
            Get in Touch
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              maxWidth: 700,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
            }}
          >
            Ready to break down language barriers? Our team of language service professionals is here to help you connect with the world.
          </Typography>
        </Stack>

        <Grid container spacing={4} sx={{ width: '100%', mb: 6 }}>
          {/* Contact Information Card */}
          <Grid  columns={{xs: 12, lg: 4}}>
            <Paper
              elevation={0}
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: 4,
                p: 4,
                height: '100%',
                border: '1px solid rgba(3, 173, 181, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gradient Border */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                }}
              />
              
              <Stack spacing={4}>
                <Typography variant="h4" fontWeight={600} color="#232932">
                  Contact Information
                </Typography>
                
                {/* Phone Numbers */}
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600} color="#03adb5" gutterBottom>
                    Phone Numbers
                  </Typography>
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Phone sx={{ color: 'white', fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={500} color="#232932">Sales</Typography>
                        <Typography color="text.secondary">+1 (555) 123-4567</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Phone sx={{ color: 'white', fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={500} color="#232932">Support</Typography>
                        <Typography color="text.secondary">+1 (555) 987-6543</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>

                <Divider sx={{ borderColor: 'rgba(3, 173, 181, 0.2)' }} />

                {/* Email Addresses */}
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600} color="#03adb5" gutterBottom>
                    Email Addresses
                  </Typography>
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Email sx={{ color: 'white', fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={500} color="#232932">General</Typography>
                        <Typography color="text.secondary">info@interpretai.com</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Email sx={{ color: 'white', fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={500} color="#232932">Sales</Typography>
                        <Typography color="text.secondary">sales@interpretai.com</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Email sx={{ color: 'white', fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={500} color="#232932">Support</Typography>
                        <Typography color="text.secondary">support@interpretai.com</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>

                <Divider sx={{ borderColor: 'rgba(3, 173, 181, 0.2)' }} />

                {/* Office Locations */}
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600} color="#03adb5" gutterBottom>
                    Office Locations
                  </Typography>
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="flex-start" spacing={2}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: '2px',
                        }}
                      >
                        <LocationOn sx={{ color: 'white', fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={500} color="#232932">San Francisco (HQ)</Typography>
                        <Typography variant="body2" color="text.secondary">
                          123 Interpreter Street, San Francisco, CA 94102
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="flex-start" spacing={2}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: '2px',
                        }}
                      >
                        <LocationOn sx={{ color: 'white', fontSize: '1.2rem' }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={500} color="#232932">New York</Typography>
                        <Typography variant="body2" color="text.secondary">
                          456 Language Avenue, New York, NY 10001
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>

                <Divider sx={{ borderColor: 'rgba(3, 173, 181, 0.2)' }} />

                {/* Live Chat */}
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600} color="#03adb5" gutterBottom>
                    Live Support
                  </Typography>
                  <Stack direction="row" alignItems="flex-start" spacing={2}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: '50%',
                        background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: '2px',
                      }}
                    >
                      <Chat sx={{ color: 'white', fontSize: '1.2rem' }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={500} color="#232932">Live Chat</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Available Monday-Friday, 9am-5pm PT
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Use the chat button in the bottom-right corner
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>

                <Divider sx={{ borderColor: 'rgba(3, 173, 181, 0.2)' }} />

                {/* Social Media */}
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600} color="#03adb5" gutterBottom>
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton 
                      sx={{
                        p: 1.5,
                        background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(290deg, #029aa1 0%, #c9125a 82.25%)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      href="https://twitter.com" 
                      target="_blank"
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton 
                      sx={{
                        p: 1.5,
                        background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(290deg, #029aa1 0%, #c9125a 82.25%)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      href="https://linkedin.com" 
                      target="_blank"
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton 
                      sx={{
                        p: 1.5,
                        background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(290deg, #029aa1 0%, #c9125a 82.25%)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      href="https://youtube.com" 
                      target="_blank"
                    >
                      <YouTube />
                    </IconButton>
                    <IconButton 
                      sx={{
                        p: 1.5,
                        background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(290deg, #029aa1 0%, #c9125a 82.25%)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      href="https://facebook.com" 
                      target="_blank"
                    >
                      <Facebook />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Form Card */}
              <Grid columns={{xs: 12, lg: 8}}>
            <Paper
              elevation={0}
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: 4,
                p: 4,
                border: '1px solid rgba(3, 173, 181, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gradient Border */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                }}
              />

              <Stack spacing={4}>
                <Typography variant="h4" fontWeight={600} color="#232932">
                  Send Us a Message
                </Typography>
                
                {isSubmitted && (
                  <Alert 
                    severity="success" 
                    icon={<CheckCircle />}
                    sx={{
                      background: 'rgba(3, 173, 181, 0.1)',
                      border: '1px solid rgba(3, 173, 181, 0.3)',
                      color: '#03adb5',
                    }}
                  >
                    Thank you for your message! We'll get back to you within 24 hours.
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid columns={{xs: 12, sm: 6}}>
                      <TextField
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange('fullName')}
                        required
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#03adb5',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid columns={{xs: 12, sm: 6}}>
                      <TextField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#03adb5',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid columns={{xs: 12, sm: 6}}>
                      <TextField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange('phone')}
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#03adb5',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid columns={{xs: 12, sm: 6}}>
                      <TextField
                        select
                        label="Inquiry Type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange('inquiryType')}
                        required
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#03adb5',
                            },
                          },
                        }}
                      >
                        <MenuItem value="" disabled>Select inquiry type</MenuItem>
                        {inquiryTypes.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid columns={{xs: 12}}>
                      <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        required
                        fullWidth
                        multiline
                        minRows={5}
                        placeholder="Tell us about your interpretation needs..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(3, 173, 181, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#03adb5',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid columns={{xs: 12}}>
                      <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        endIcon={<Send />}
                        disabled={isSubmitted}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
                          boxShadow: '0 4px 16px rgba(3, 173, 181, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(290deg, #029aa1 0%, #c9125a 82.25%)',
                            boxShadow: '0 6px 20px rgba(3, 173, 181, 0.4)',
                            transform: 'translateY(-2px)',
                          },
                          '&:disabled': {
                            background: 'rgba(3, 173, 181, 0.3)',
                            color: 'rgba(255, 255, 255, 0.7)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {isSubmitted ? 'Message Sent!' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>

                <Typography 
                  variant="caption" 
                  color="text.secondary" 
                  sx={{ 
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  By submitting this form, you agree to our privacy policy. 
                  We respect your privacy and will never share your information with third parties.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: 4,
            p: 6,
            border: '1px solid rgba(3, 173, 181, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gradient Border */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(290deg, #03adb5 0%, #e41469 82.25%)',
            }}
          />
          
          <Stack spacing={3} alignItems="center">
            <Typography variant="h4" fontWeight={600} color="#232932">
              Find Us
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="center">
              Visit our offices or explore our global presence
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: 300,
                background: 'linear-gradient(135deg, #f0f1f3 0%, #e9ecef 100%)',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed rgba(3, 173, 181, 0.3)',
                color: '#666',
                fontSize: '1.2rem',
                fontWeight: 500,
              }}
            >
              Interactive Map Coming Soon
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
