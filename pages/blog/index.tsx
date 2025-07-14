import styles from './style.module.scss';
import { Stack, Typography, Card, Box, Button, CardActionArea, Skeleton } from '@mui/material';
import { usePosts } from '@/api/getPosts';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';


const Blog = () => {
  const { push } = useRouter();

  const { data, isLoading } = usePosts();
  const { t: translate } = useTranslation();

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, [data]);

  const handleBlogPostRouting = (post: any) => {
    event('select_blog_post_click', {
      category: 'Blog',
      action: 'Click',
      label: 'Select Blog post to view',
    });

    push(`/blog/blog-post?title=${post.slug}`);
  };

  return (
    <>
      <HeroCard
        backgroundImageUrl={'/images/hero-image.png'}
        hasButton={false}
        title={translate('blog:hero:title')}
        subtitle={translate('blog:hero:subtitle') as string}
      />
      <Stack spacing={5} className="section-container" alignItems="center">
        <Stack className="section-content">
          <Stack spacing={5} alignItems="center" width="100%">
            <Stack textAlign="left" alignSelf={'flex-start'}>
              <Typography
                fontSize={{ xs: '48px', lg: '64px' }}
                fontWeight={700}
                lineHeight="80px"
                align="left"
                className="blog-section-title"
              >
                {translate('blog:title')}
              </Typography>
            </Stack>

            {isLoading ? (
              <Skeleton sx={{ height: 352, width: 1200 }} animation="pulse" variant="rectangular" />
            ) : (
              <Stack spacing={2} direction={'row'} flexWrap="wrap" useFlexGap justifyContent={'space-between'}>
                {posts.slice(0, 4).map((post) => (
                  <Card
                    sx={{
                      borderRadius: '24px',
                      paddingBottom: '16px',
                      width: '100%',
                      maxWidth: '360px',
                      backgroundColor: 'white',
                      boxShadow: 'none',
                    }}
                  >
                    <CardActionArea
                      onClick={() => {
                        handleBlogPostRouting(post);
                      }}
                    >
                      <Stack spacing={2}>
                        <img
                          src={post.feature_image}
                          width="100%"
                          height="212px"
                          style={{
                            objectFit: 'fill',
                            borderRadius: '24px',
                          }}
                        />

                        <Stack justifyContent="center" px={2} spacing={2} sx={{ paddingBottom: '16px' }}>
                          <Typography variant="h5" fontWeight={500} textAlign="left">
                            {post.title}
                          </Typography>

                          <Box>
                            <Typography
                              textAlign="left"
                              fontWeight={400}
                              fontSize="14px"
                              sx={{
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: '4',
                                WebkitBoxOrient: 'vertical',
                              }}
                            >
                              {post.excerpt}
                            </Typography>
                          </Box>
                        </Stack>
                      </Stack>
                    </CardActionArea>
                  </Card>
                ))}
              </Stack>
            )}
          </Stack>
        </Stack>

        <Stack spacing={5} className="section-content">
          <Stack textAlign="left" alignSelf="flex-start">
            <Typography
              fontSize={{ xs: '48px', lg: '64px' }}
              fontWeight={700}
              lineHeight="80px"
              align="left"
              className="blog-section-title"
            >
              {translate('blog:secondaryTitle')}
            </Typography>
          </Stack>

          {isLoading ? (
            <Skeleton sx={{ height: 352, width: 1200 }} animation="pulse" variant="rectangular" />
          ) : (
            <Stack spacing={2} direction={'row'} flexWrap="wrap" useFlexGap justifyContent="space-between">
              {posts.map((post) => (
                <Card
                  sx={{
                    borderRadius: '24px',
                    paddingBottom: '16px',
                    width: '100%',
                    maxWidth: '384px',
                    boxShadow: 'none',
                    backgroundColor: 'white',
                  }}
                >
                  <CardActionArea
                    onClick={() => {
                      handleBlogPostRouting(post);
                    }}
                  >
                    <Stack spacing={2}>
                      <img
                        src={post.feature_image}
                        width="100%"
                        height="212px"
                        style={{
                          objectFit: 'fill',
                          borderRadius: '24px',
                        }}
                      />

                      <Stack justifyContent="center" px={2} spacing={2} sx={{ paddingBottom: '16px' }}>
                        <Typography variant="h5" fontWeight={500} textAlign="left" color="secondary.contrastText">
                          {post.title}
                        </Typography>

                        <Box>
                          <Typography
                            textAlign="left"
                            fontWeight={400}
                            fontSize="14px"
                            color="secondary.contrastText"
                            sx={{
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: '4',
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {post.excerpt}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </CardActionArea>
                </Card>
              ))}
            </Stack>
          )}

          {/* <Stack alignItems="center" sx={{ paddingBottom: '64px' }}>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                width: { xs: '180px' },
                height: '56px',
                borderRadius: '100px',
                boxShadow: 'none',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              LOAD MORE
            </Button>
          </Stack> */}
        </Stack>
      </Stack>
    </>
  );
};

export default Blog;

export const getStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'common', 'home', 'blog', 'projects', 'services', 'faqs'])),
  },
});
