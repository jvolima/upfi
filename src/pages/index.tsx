/* eslint-disable no-shadow */
import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import Head from 'next/head';
import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = null }) => {
      const { data } = await api.get('/api/images', {
        params: {
          after: pageParam,
        },
      });

      return data;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.after) {
          return null;
        }

        return lastPage.after;
      },
    }
  );

  const formattedData = useMemo(() => {
    const pages = data?.pages.flatMap(page => {
      return page;
    });

    const pageData = pages?.flatMap(page => {
      const images = page.data.map(data => {
        return {
          title: data.title,
          description: data.description,
          url: data.url,
          ts: data.ts,
          id: data.id,
        };
      });
      return images;
    });

    return pageData;
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Head>
        <title>Upfi</title>
      </Head>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            mt="10"
            width="134px"
            height="40px"
            borderRadius="6px"
            bgColor="orange.500"
            color="pGray.50"
            fontWeight="bold"
            lineHeight="1.25rem"
          >
            {isFetchingNextPage === true ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
