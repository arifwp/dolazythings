import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { HashLink } from "react-router-hash-link";
import { navs } from "../data/navs";
import useScreenWidth from "../lib/useScreenWidth";
import { CustomContainer } from "./CustomContainer";

const Navbar = () => {
  const sw = useScreenWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CustomContainer mx={"auto"}>
      <HStack
        className="navbar"
        justify={{ base: "space-between", sm: "space-between" }}
        px={[5, null, 8]}
        py={4}
        bgColor={"white"}
        zIndex={999}
        backdropFilter="auto"
        backdropBlur={"4px"}
      >
        <Box>
          <Heading as={"h2"} color={"teal.900"} fontWeight={"bold"}>
            LazyBooth
          </Heading>
        </Box>

        {sw >= 640 && (
          <HStack>
            {navs.map((nav, i) => (
              <HashLink to={nav.link} key={i}>
                <Button
                  colorScheme="white"
                  variant={"ghost"}
                  fontWeight={"semibold"}
                  color={"teal.900"}
                >
                  {nav.label}
                </Button>
              </HashLink>
            ))}
          </HStack>
        )}

        {sw <= 640 && (
          <>
            <IconButton
              aria-label="nav-button"
              bgColor={"teal.900"}
              icon={
                <Icon
                  as={RiMenu3Line}
                  color={"white"}
                  fontSize={20}
                  onClick={onOpen}
                />
              }
            />

            <Drawer onClose={onClose} isOpen={isOpen} size={"xs"}>
              <DrawerOverlay />
              <DrawerContent
                bg="rgba(0, 0 ,0 ,0.5)"
                backdropFilter="auto"
                backdropBlur={"10px"}
              >
                <DrawerCloseButton>
                  <VStack
                    borderRadius={"md"}
                    borderColor={"white"}
                    borderWidth={"1px"}
                    mt={4}
                    p={0.7}
                    mr={4}
                  >
                    <Icon as={RiCloseLine} color={"white"} fontSize={"28px"} />
                  </VStack>
                </DrawerCloseButton>
                <DrawerHeader>
                  <VStack>
                    <Image src="/images/instagram.png" h="80px" />
                    <Text color={"white"}>DoLazyThings</Text>
                  </VStack>
                </DrawerHeader>
                <DrawerBody>
                  <VStack align={"stretch"}>
                    <Wrap justify={"center"}>
                      <Box
                        bgColor={"white"}
                        h={"1px"}
                        w={"90%"}
                        opacity={"0.3"}
                      ></Box>
                    </Wrap>
                    {navs.map((nav, i) => (
                      <HashLink to={nav.link} key={i}>
                        <Button
                          onClick={() => onClose()}
                          colorScheme="teal"
                          textColor={"white"}
                          variant={"ghost"}
                        >
                          {nav.label}
                        </Button>
                      </HashLink>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </HStack>
    </CustomContainer>
  );
};

export default Navbar;
