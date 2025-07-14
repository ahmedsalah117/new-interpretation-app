import { Stack, Typography, Card, Box, Button, CardActionArea, Skeleton } from '@mui/material';
import { usePosts } from '@/api/getPosts';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HeroCard from '@/components/Common/HeroCard/HeroCard';
import { useTranslation } from 'next-i18next';
import styles from './style.module.scss';
import { event } from 'nextjs-google-analytics';

const BlogPost = () => {
  const {
    isReady,
    query,
    query: { title },
  } = useRouter();

  const { data, isLoading, refetch, isRefetching } = usePosts();

  const { t: translate } = useTranslation();
  const [posts, setPosts] = useState<any[]>([]);
  const [targetPost, setTargetPost] = useState<any>(null);

  const { push } = useRouter();

  useEffect(() => {
    if (data && title && isReady) {
      setPosts(data.posts.filter((post: any) => post.slug !== title));
      const target = data.posts.find((post: any) => post.slug === title);
      setTargetPost(target);
    }
  }, [data, title, isRefetching, isReady]);

  const handleBlogPostRouting = (post: any) => {
    event('select_blog_post_click', {
      category: 'Blog',
      action: 'Click',
      label: 'Select Blog post to view',
    });

    push(`/blog/blog-post?title=${post.slug}`);

    refetch();
  };

  return (
    <>
      <Stack className="section-container" sx={{ background: 'white' }}>
        <HeroCard
          backgroundImageUrl={'/images/hero-image.png'}
          hasButton={false}
          title={translate('blog:hero:title')}
          subtitle={translate('blog:hero:subtitle') as string}
        />
        <Stack className="section-content">
          <Stack
            spacing={5}
            alignItems="center"
            sx={{
              marginTop: '56px',
            }}
          >
            {isLoading || isRefetching ? (
              <Skeleton sx={{ height: 352, width: 1200 }} animation="pulse" variant="rectangular" />
            ) : (
              <Stack
                spacing={2}
                direction={'row'}
                flexWrap="wrap"
                useFlexGap
                justifyContent="center"
                sx={{
                  borderRadius: '24px',
                  paddingBottom: '16px',
                  width: '100%',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  maxWidth: '760px',
                }}
              >
                <img
                  src={targetPost?.feature_image}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '24px',
                  }}
                />

                <Stack justifyContent="center" px={2} spacing={4} sx={{ paddingBottom: '16px', maxWidth: '760px' }}>
                  <Typography variant="h5" fontWeight={500} textAlign="left" className="blog-section-title">
                    {targetPost?.title}
                  </Typography>

                  <Box dangerouslySetInnerHTML={{ __html: targetPost?.html }} className="blog-post-body" />
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>

        <Stack sx={{ paddingTop: '80px' }} px={{ xs: 1, lg: 8 }} className="section-content" spacing={5}>
          <Stack textAlign="left" sx={{ width: '100%' }}>
            <Typography fontSize={{ xs: '48px', lg: '64px' }} fontWeight={700} lineHeight="80px" className="blog-section-title">
              Other Stories
            </Typography>
          </Stack>

          <Stack spacing={2} direction={'row'} flexWrap="wrap" useFlexGap paddingX={'8px'} justifyContent="center">
            {posts.slice(0, 3).map((post) => (
              <Card
                sx={{
                  borderRadius: '24px',
                  paddingBottom: '16px',
                  width: '100%',
                  maxWidth: '384px',
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                <CardActionArea onClick={() => handleBlogPostRouting(post)}>
                  <Stack spacing={2}>
                    <img
                      src={post.feature_image}
                      width="100%"
                      height="288px"
                      style={{
                        objectFit: 'cover',
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

          {/* <Stack alignItems="center">
      <Button
        variant="contained"
        size="large"
        sx={{
          maxWidth: '170px',
          backgroundColor: 'secondary.main',
          color: '#1F1F1F',
          ':hover': {
            backgroundColor: 'secondary.dark',
          },
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

export default BlogPost;

export const getStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'common', 'home', 'blog', 'projects', 'services', 'faqs'])),
  },
});
