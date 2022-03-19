/* eslint-disable no-shadow */
import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

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
        if (!pages) {
          return null;
        }

        return pages;
      },
    }
  );

  const formattedData = useMemo(() => {
    const newData = data?.pages.map(page => {
      return {
        title: page.title,
        description: page.description,
        url: page.url,
        ts: page.ts,
        id: page.id,
      };
    });

    return newData;
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
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
