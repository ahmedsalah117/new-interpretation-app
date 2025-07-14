import React from 'react';
import styles from './style.module.scss';
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Faq = () => {
  const { t: translate } = useTranslation();
  const accordionItems = [
    {
      id: 1,
      accordionQuestion: `${translate('faqs:question:one')}`,
      accordionAnswer: `${translate('faqs:answer:one')}`,
    },
    {
      id: 2,
      accordionQuestion: `${translate('faqs:question:two')}`,
      accordionAnswer: `${translate('faqs:answer:two')}`,
    },
    {
      id: 3,
      accordionQuestion: `${translate('faqs:question:three')}`,
      accordionAnswer: `${translate('faqs:answer:three')}`,
    },
    {
      id: 4,
      accordionQuestion: `${translate('faqs:question:four')}`,
      accordionAnswer: `${translate('faqs:answer:four')}`,
    },
    {
      id: 5,
      accordionQuestion: `${translate('faqs:question:five')}`,
      accordionAnswer: `${translate('faqs:answer:five')}`,
    },
    {
      id: 6,
      accordionQuestion: `${translate('faqs:question:six')}`,
      accordionAnswer: `${translate('faqs:answer:six')}`,
    },
    {
      id: 7,
      accordionQuestion: `${translate('faqs:question:seven')}`,
      accordionAnswer: `${translate('faqs:answer:seven')}`,
    },
    {
      id: 8,
      accordionQuestion: `${translate('faqs:question:eight')}`,
      accordionAnswer: `${translate('faqs:answer:eight')}`,
    },
    {
      id: 9,
      accordionQuestion: `${translate('faqs:question:nine')}`,
      accordionAnswer: `${translate('faqs:answer:nine')}`,
    },
    {
      id: 10,
      accordionQuestion: `${translate('faqs:question:ten')}`,
      accordionAnswer: `${translate('faqs:answer:ten')}`,
    },
    {
      id: 11,
      accordionQuestion: `${translate('faqs:question:eleven')}`,
      accordionAnswer: `${translate('faqs:answer:eleven')}`,
    },
    {
      id: 12,
      accordionQuestion: `${translate('faqs:question:twelve')}`,
      accordionAnswer: `${translate('faqs:answer:twelve')}`,
    },
    {
      id: 13,
      accordionQuestion: `${translate('faqs:question:thirteen')}`,
      accordionAnswer: `${translate('faqs:answer:thirteen')}`,
    },
    {
      id: 14,
      accordionQuestion: `${translate('faqs:question:fourteen')}`,
      accordionAnswer: `${translate('faqs:answer:fourteen')}`,
    },
    {
      id: 15,
      accordionQuestion: `${translate('faqs:question:fifteen')}`,
      accordionAnswer: `${translate('faqs:answer:fifteen')}`,
    },
  ];

  return (
    <Stack id="faq-content" className={styles['section-content']} alignItems={'center'} gap={3}>
      {accordionItems.map((accordion) => (
        <Accordion disableGutters key={accordion.id} variant="outlined" sx={{ border: `1px solid #DFE6F0` }}>
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#E41469', width: '32px', height: '32px' }} />}>
            {accordion.id === 2 || accordion.id === 3 ? (
              <Link href={accordion.id === 3 ? '/?scrollId=how-it-works' : '/services'} passHref onClick={(e) => e.stopPropagation()}>
                <Typography
                  fontWeight={600}
                  fontSize={{ xs: '16px', lg: '20px' }}
                  sx={{
                    ':hover': {
                      color: '#0000EE',
                      cursor: 'pointer',
                    },
                  }}
                >
                  {accordion.accordionQuestion}
                </Typography>
              </Link>
            ) : (
              <Typography fontWeight={600} fontSize={{ xs: '16px', lg: '20px' }}>
                {accordion.accordionQuestion}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontWeight={400} fontSize={{ xs: '16px', lg: '20px' }}>
              {accordion.accordionAnswer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default Faq;
