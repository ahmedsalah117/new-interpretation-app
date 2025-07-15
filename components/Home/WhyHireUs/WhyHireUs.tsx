import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import styles from './style.module.scss';
import { useTranslation } from 'next-i18next';

const WhyHireUs = () => {
  const { t: translate } = useTranslation<any>();
  return (
    <Stack id="why-hire-us-section" className="section-container">
      <Stack className="section-content" direction={{ xs: 'column', lg: 'row' }} spacing={3}>
        <Typography
          fontWeight={700}
          fontSize={{ xs: '32px', lg: '48px' }}
          lineHeight="56px"
          className="hire-us-header"
          sx={{ width: { xs: '100%', lg: '345px' } }}
        >
          {translate('home:whyHireUs:title')}
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', lg: 'flex' } }} />

        <Typography
          fontWeight={400}
          fontSize="24px"
          sx={{ maxWidth: { xs: '100%', lg: '794px' }, width: '100%', height: '100%' }}
          lineHeight="38px"
        >
          {translate('home:whyHireUs:body')}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WhyHireUs;
