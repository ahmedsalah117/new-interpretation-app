import { Stack } from '@mui/material';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import styles from './styles.module.scss';

interface CardProps {
  icon: string | React.ReactNode;
  title: string;
  body: string;
  align?: 'center' | 'start';
  justify?: 'center' | 'start';
  width?: string;
  height?: string;
  maxWidth?: string;
}

const WexcuteCard = ({ icon, title, body, align = 'center', justify = 'center', width, height, maxWidth }: CardProps) => {
  return (
    <Stack
      className={styles["card-container"]}
      style={{ border: '1px solid #DFE6F0', width: width || '250px', height: height || 'fit-content', maxWidth }}
    >
      <Stack alignItems={align} justifyContent={justify} spacing={2} className={styles["card-content"]}>
        {typeof icon === 'string' ? <Image src={icon} alt={'icon'} width="64" height="66" /> : icon}
        <Typography className={styles["card-title"]} textAlign={align}>
          {title}
        </Typography>
        <Typography className={styles["card-body"]} textAlign={align}>
          {body}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WexcuteCard;
