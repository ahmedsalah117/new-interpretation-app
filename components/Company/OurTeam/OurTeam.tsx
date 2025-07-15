import { Button, Stack, Typography, Box, Card, CardContent, Avatar } from '@mui/material';
import styles from './style.module.scss';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';

const OurTeam = () => {
  const router = useRouter();
  const { t: translate } = useTranslation<any>();

  const handleExploreProjectsClick = () => {
    event('explore_projects_btn_click', {
      category: 'Projects',
      action: 'Click',
      label: 'Explore Projects Button',
    });

    router.push('/projects');
  };

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      description: 'Former professional interpreter with 15+ years in language services.',
      image: '/images/our_team/sara.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Miguel Rodriguez',
      role: 'CTO',
      description: 'AI specialist with a background in computational linguistics.',
      image: '/images/our_team/miguel.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Aisha Patel',
      role: 'Head of Interpreter Relations',
      description: 'Certified medical interpreter with expertise in medical interpretation.',
      image: '/images/our_team/aisha.jpg',
      linkedin: '#',
      twitter: '#',
    },
  ];

  return (
    <Stack className="section-container" pt="50px">
      <Stack className="section-content" spacing="80px">
        {/* Header Section */}
        <Stack width="100%" alignItems="center" spacing={4}>
          <Typography
            fontSize={{ xs: '14px', md: '2rem' }}
            fontWeight={600}
            color="#E41469"
            letterSpacing="2px"
            textTransform="uppercase"
            sx={{
              background: 'linear-gradient(90deg, #E41469 0%, #03ADB5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            OUR TEAM
          </Typography>
          
          <Typography
            fontSize={{ xs: '28px', md: '36px', lg: '48px' }}
            fontWeight={700}
            lineHeight="1.2"
            textAlign="center"
            maxWidth="800px"
            sx={{
              background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet the people behind InterpretAI
          </Typography>
        </Stack>

        {/* Team Members Grid */}
        <Stack width="100%" alignItems="center">
          <Box
            sx={{
              width: '100%',
              maxWidth: '1200px',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: { xs: 4, md: 6 },
            }}
          >
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(3, 173, 181, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 30px 60px rgba(3, 173, 181, 0.2)',
                    '& .member-image': {
                      transform: 'scale(1.05)',
                    },
                    '& .member-overlay': {
                      opacity: 1,
                    }
                  }
                }}
              >
                {/* Member Image */}
                <Box
                  sx={{
                    position: 'relative',
                    height: '320px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #03ADB5 0%, #E41469 100%)',
                  }}
                >
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    className="member-image"
                    priority={index < 2}
                  />
                  
                  {/* Gradient Overlay */}
                  <Box
                    className="member-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(3, 173, 181, 0.8) 0%, rgba(228, 20, 105, 0.8) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Stack spacing={2} alignItems="center">
                      <Typography
                        fontSize="18px"
                        fontWeight={600}
                        color="white"
                        textAlign="center"
                      >
                        Connect with {member.name.split(' ')[0]}
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.3)',
                              transform: 'scale(1.1)',
                            }
                          }}
                        >
                          <Typography fontSize="16px" color="white">in</Typography>
                        </Box>
                        <Box
                          sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.3)',
                              transform: 'scale(1.1)',
                            }
                          }}
                        >
                          <Typography fontSize="16px" color="white">𝕏</Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>

                {/* Member Info */}
                <CardContent
                  sx={{
                    padding: '32px',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    fontSize={{ xs: '24px', md: '28px' }}
                    fontWeight={700}
                    color="#232932"
                    mb={1}
                    sx={{
                      background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {member.name}
                  </Typography>
                  
                  <Typography
                    fontSize="16px"
                    fontWeight={600}
                    color="#E41469"
                    mb={2}
                    textTransform="uppercase"
                    letterSpacing="1px"
                  >
                    {member.role}
                  </Typography>
                  
                  <Typography
                    fontSize="16px"
                    lineHeight="1.6"
                    color="#5D6571"
                    sx={{
                      '&::first-letter': {
                        fontSize: '1.2em',
                        fontWeight: 600,
                        color: '#03ADB5',
                      }
                    }}
                  >
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Stack>

        {/* Team Values Section */}
        <Stack 
          width="100%" 
          alignItems="center"
          sx={{
            background: 'linear-gradient(135deg, rgba(3, 173, 181, 0.05) 0%, rgba(228, 20, 105, 0.05) 100%)',
            borderRadius: '30px',
            padding: { xs: '40px 20px', md: '60px 40px' },
            border: '1px solid rgba(3, 173, 181, 0.1)',
          }}
        >
          <Typography
            fontSize={{ xs: '24px', md: '32px' }}
            fontWeight={700}
            color="#232932"
            textAlign="center"
            mb={4}
            sx={{
              background: 'linear-gradient(139deg, #03ADB5 0%, #E41469 56.17%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Leadership Values
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 6 }}
            maxWidth="1000px"
            width="100%"
          >
            <Stack spacing={2} flex={1} alignItems="center">
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #03ADB5 0%, #E41469 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Typography fontSize="24px" color="white" fontWeight={600}>🎯</Typography>
              </Box>
              <Typography fontSize="18px" fontWeight={600} color="#232932" textAlign="center">
                Innovation
              </Typography>
              <Typography fontSize="14px" color="#5D6571" textAlign="center" lineHeight="1.6">
                Continuously pushing boundaries in language technology
              </Typography>
            </Stack>

            <Stack spacing={2} flex={1} alignItems="center">
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #03ADB5 0%, #E41469 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Typography fontSize="24px" color="white" fontWeight={600}>🤝</Typography>
              </Box>
              <Typography fontSize="18px" fontWeight={600} color="#232932" textAlign="center">
                Collaboration
              </Typography>
              <Typography fontSize="14px" color="#5D6571" textAlign="center" lineHeight="1.6">
                Building bridges between cultures and communities
              </Typography>
            </Stack>

            <Stack spacing={2} flex={1} alignItems="center">
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #03ADB5 0%, #E41469 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Typography fontSize="24px" color="white" fontWeight={600}>💎</Typography>
              </Box>
              <Typography fontSize="18px" fontWeight={600} color="#232932" textAlign="center">
                Excellence
              </Typography>
              <Typography fontSize="14px" color="#5D6571" textAlign="center" lineHeight="1.6">
                Delivering the highest quality interpretation services
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Call to Action */}
        <Stack width="100%" alignItems="center" spacing={3}>
          <Button
            size="large"
            variant="contained"
            sx={{
              maxWidth: '350px',
              width: '100%',
              borderRadius: '100px',
              height: '64px',
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 600,
              background: 'linear-gradient(135deg, #03ADB5 0%, #E41469 100%)',
              boxShadow: '0 8px 24px rgba(3, 173, 181, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #E41469 0%, #03ADB5 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 32px rgba(228, 20, 105, 0.4)',
              }
            }}
            onClick={handleExploreProjectsClick}
          >
            Explore Our Projects
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurTeam;