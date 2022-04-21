import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import * as React from 'react';



export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as='nav'>
      <Flex bg={'pink'} color={'gray.600'} py={{ base: 2 }} px={{ base: 4 }} 
        borderBottom={1} borderStyle={'solid'} borderColor={'gray.200'} align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

      </Flex>
    </Box>
  );

}

const ExempelComponent = () => {
  return (
    <div style={{ color: '#e53e3e' }}> Hello</div>
  );
};

const ExempelChakraComponent = () => {
  return (
    <Box color='e53e3e'> Hello</Box>
  );
};

export { ExempelChakraComponent, ExempelComponent };