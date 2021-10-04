
import './App.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Skeleton,
  Flex,
  Image,
} from "@chakra-ui/react"

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex w="100%" mt="20%">
        <Button className="body" fontSize="paragraph.sm" bg="brand.primaryOrange" color="brand.baseColor"  m="0 auto" onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontFamily="fonts.body">Retrato de Maria Cristina Goicochea</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Image></Image>
              <Skeleton w={1 / 3} my={2} height="10px" />
              <Skeleton height="10px" />
            </ModalBody>
            < Image
            src="https://i.ibb.co/yypmPZm/maria-Crisstina.png"
            alt="se muestra una foto de Emilia prieto en sus años dorados"
            />
            
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                leer más
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

    </>
  )
}

export default BasicUsage;
