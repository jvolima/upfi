import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';
import { useEffect } from 'react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>
      <ModalOverlay />
      <ModalContent
        maxWidth={['300px', '300px', '600px', '900px']}
        maxHeight="600px"
      >
        <ModalBody p="0" m="0">
          <Image
            src={imgUrl}
            maxWidth="900px"
            maxHeight="600px"
            w="100%"
            h="100%"
          />
        </ModalBody>
        <ModalFooter
          m="0"
          pl="10px"
          bgColor="pGray.800"
          height="32px"
          border-radius="0px 0px 6px 6px"
          display="flex"
          justifyContent="flex-start"
        >
          <Link
            href={imgUrl}
            target="_blank"
            fontSize="14px"
            lineHeight="16px"
            color="pGray.50"
            textDecoration="none"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
