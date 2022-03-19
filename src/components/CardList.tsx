import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  function handleViewImage(url: string): void {
    // TODO FUNCTION HANDLE VIEW IMAGE
  }

  return (
    <>
      <SimpleGrid spacing="40px" minChildWidth="293px">
        {cards.map(card => (
          <Card
            data={card}
            key={card.id}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
