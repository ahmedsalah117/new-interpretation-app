import React from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useWindowSize } from '@/hooks/useWindowSize';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';

const AboutUsText = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/projects');
  };

  return (
    <Stack sx={{ width: '100%', paddingY: 8, backgroundColor: 'primary.blue' }} alignItems="center">
      <Stack spacing={4} maxWidth="1200px" paddingX={'24px'} alignItems="center" direction={{ sm: 'column', lg: 'row' }}>
        <Stack alignItems="center" display={{ xs: 'none', lg: 'flex' }}>
          <Image
            src="/images/colleagues-giving-fist-bump.jpg"
            alt="colleagues giving fist bump"
            height={width < 950 ? 270 : 466}
            width={width < 950 ? 270 : 466}
            style={{ borderRadius: '16px', objectFit: width >= 1200 ? 'cover' : 'contain' }}
          />
        </Stack>

        <Stack spacing={2} sx={{ width: '100%' }} alignItems="center">
          <Stack spacing={2} sx={{ widht: '100%' }} alignItems="center">
            <Typography variant="h2" align="center" color="neutral.main">
              Who We Are?
            </Typography>

            <Typography variant="body2" color="neutral.main">
              WeXcute was born out of passion and innovation during the pandemic when two good friends joined forces on a groundbreaking
              project. United by their shared vision, they transformed an idea into a successful digital solution, and it marked the
              beginning of an incredible journey. This project became the first of its kind and now stands as the largest e-bike sharing
              mobile app in the Middle East.
            </Typography>

            <Typography variant="body2" color="neutral.main">
              Inspired by their accomplishment and driven by their wealth of knowledge and experience, the founders, Mohamed and Abdullah,
              established WeXcute to help businesses of all sizes turn their ideas and concepts into reality. We strive to create
              exceptional digital solutions tailored to the unique needs of each client. We operate from two offices in Cairo, Egypt and
              Hamburg, Germany, but we serve clients worldwide.
            </Typography>

            <Typography variant="body2" color="neutral.main">
              What sets us apart from the competition is that we see our client's goals as our own. At WeXcute, we don't merely offer
              services based on customer requirements and briefs. Instead, we dive deep into research, identifying the most effective
              routes, the most valuable features, and the most strategic actions to benefit our clients. By doing so, we ensure that our
              digital solutions not only meet expectations but surpass them. <br />
              Work with us at WeXcute, and let's create a brighter digital future together, one project at a time!
            </Typography>
          </Stack>

          <Stack alignSelf="start">
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{ letterSpacing: '0.1em' }}
              endIcon={<ChevronRightIcon sx={{ fontSize: '18px' }} />}
              size="medium"
            >
              Check Our Work
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutUsText;
