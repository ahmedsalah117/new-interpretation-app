import React from 'react';
import styles from './style.module.scss';
import { Stack, Typography, Box, Avatar, Rating } from '@mui/material';
import { useTranslation } from 'next-i18next';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  const { t: translate } = useTranslation();

  const TESTIMONIALS = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'Technology Startup',
      rating: 5,
      testimonial: 'Wexcute transformed our interpretation needs. Their professional service and quick response times have been invaluable for our international client meetings. Highly recommended!',
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Operations Manager',
      company: 'Global Logistics Corp',
      rating: 5,
      testimonial: 'The quality of interpretation services is outstanding. Our team can now communicate seamlessly with partners worldwide. Wexcute has become an essential part of our business.',
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      position: 'HR Director',
      company: 'Healthcare Solutions',
      rating: 5,
      testimonial: 'Reliable, professional, and always on time. Wexcute has helped us bridge language barriers in our multicultural workplace. Their interpreters are truly experts in their field.',
      avatar: '/images/testimonials/elena.jpg'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'International Relations',
      company: 'Educational Institute',
      rating: 5,
      testimonial: 'We\'ve been working with Wexcute for over a year now. Their interpreters are not only linguistically skilled but also culturally sensitive. Perfect for our diverse student body.',
      avatar: '/images/testimonials/david.jpg'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Marketing Director',
      company: 'E-commerce Platform',
      rating: 5,
      testimonial: 'The real-time interpretation services have revolutionized how we conduct international business. Wexcute\'s technology and expertise are unmatched in the industry.',
      avatar: '/images/testimonials/lisa.jpg'
    },
    {
      id: 6,
      name: 'Ahmed Hassan',
      position: 'Project Manager',
      company: 'Construction Firm',
      rating: 5,
      testimonial: 'Outstanding service quality and exceptional customer support. Wexcute has helped us successfully manage multilingual projects across multiple countries.',
      avatar: '/images/testimonials/ahmed.jpg'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        sx={{
          color: index < rating ? '#FFD700' : '#E0E0E0',
          fontSize: 20
        }}
      />
    ));
  };

  return (
    <Stack className="section-container" direction="column" spacing={6}>
      <Stack className="section-content" direction="column" spacing={4} alignItems="center" sx={{maxWidth: '100% !important'}}>
        <Stack direction="column" spacing={2} alignItems="center" maxWidth="800px">
          <Typography
            fontSize={{ xs: '32px', lg: '48px' }}
            fontWeight={700}
            lineHeight="56px"
            className="testimonials-header"
            textAlign="center"
          >
            What Our Clients Say
          </Typography>
          <Typography 
            fontSize="20px" 
            fontWeight={400} 
            lineHeight="32px" 
            textAlign="center"
            color="#666"
          >
            Trusted by businesses worldwide for professional interpretation services
          </Typography>
        </Stack>

        {/* Overall Rating Section */}
        <Stack 
          direction="column" 
          spacing={2} 
          alignItems="center"
          sx={{ 
            mt: 2,
            p: 4,
            backgroundColor: 'rgba(3, 173, 181, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(3, 173, 181, 0.1)'
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            {renderStars(5)}
          </Stack>
          <Typography fontSize="24px" fontWeight={700} color="#232932">
            5.0 out of 5
          </Typography>
          <Typography fontSize="16px" color="#666" textAlign="center">
            Based on {TESTIMONIALS.length}+ verified customer reviews
          </Typography>
        </Stack>

        {/* Testimonials Grid */}
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={3} 
          alignItems="stretch" 
          justifyContent="center"
          sx={{ mt: 4, width: '100%' }}
          flexWrap="wrap"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <Box
              key={testimonial.id}
              className="testimonial-card"
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)', lg: '1 1 calc(33.333% - 16px)' },
                maxWidth: { lg: '400px' }
              }}
            >
              <Stack 
                direction="column" 
                spacing={3} 
                className="testimonial-content"
                sx={{ p: 4, height: '100%' }}
              >
                {/* Quote Icon */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      color: '#03adb5', 
                      fontSize: 32,
                      opacity: 0.3
                    }} 
                  />
                </Box>

                {/* Rating */}
                <Stack direction="row" spacing={1}>
                  {renderStars(testimonial.rating)}
                </Stack>

                {/* Testimonial Text */}
                <Typography 
                  fontSize="16px" 
                  color="#232932" 
                  lineHeight="24px"
                  sx={{ flexGrow: 1 }}
                >
                  "{testimonial.testimonial}"
                </Typography>

                {/* Author Info */}
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ 
                      width: 48, 
                      height: 48,
                      backgroundColor: '#03adb5'
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Stack direction="column" spacing={0.5}>
                    <Typography fontSize="16px" fontWeight={600} color="#232932">
                      {testimonial.name}
                    </Typography>
                    <Typography fontSize="14px" color="#666">
                      {testimonial.position}
                    </Typography>
                    <Typography fontSize="12px" color="#999">
                      {testimonial.company}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>

        {/* Trust Indicators */}
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
                ✓
              </Typography>
            </Box>
            <Typography fontSize="16px" fontWeight={500} color="#232932">
              Verified Reviews
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
                ✓
              </Typography>
            </Box>
            <Typography fontSize="16px" fontWeight={500} color="#232932">
              Real Customers
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
                ✓
              </Typography>
            </Box>
            <Typography fontSize="16px" fontWeight={500} color="#232932">
              Quality Guaranteed
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
