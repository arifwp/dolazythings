import {
  HStack,
  Heading,
  Icon,
  Image,
  VStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import { RiKey2Fill } from "@remixicon/react";
import { CustomContainer } from "../components/CustomContainer";

export const About = () => {
  return (
    <section id="aboutSection">
      <CustomContainer>
        <HStack
          bgColor={"white"}
          flexWrap={"wrap"}
          spacing={{ base: 6, sm: 6, md: 6, lg: 9 }}
          py={14}
          px={14}
          justify={"space-between"}
        >
          <VStack
            mt={8}
            pl={8}
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "fit-content",
            }}
          >
            <Heading
              color={"teal.900"}
              as={"h1"}
              textAlign={"center"}
              fontSize={{ base: "20px", sm: "22px", md: "24px", lg: "24px" }}
            >
              More than just an app, we help you manage your bussiness.
            </Heading>

            <Image
              src="/images/illustration_people_camera.svg"
              maxW={{ base: "200px", sm: "260px", md: "300px", lg: "400px" }}
              mt={8}
            />
          </VStack>

          <Stack
            direction={{
              base: "row",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "column",
            }}
            justify={"center"}
            spacing={4}
            display={"flex"}
            flexWrap={"wrap"}
            gap={6}
          >
            <HStack
              borderWidth={2}
              borderColor={"teal.900"}
              borderRadius={"lg"}
              p={8}
              maxW={{ base: "300px", sm: "360px", md: "300px", lg: "400px" }}
            >
              <Icon
                as={RiKey2Fill}
                color={"teal.900"}
                fontSize={"36px"}
                alignSelf={"flex-start"}
              />
              <VStack>
                <Heading
                  as={"h6"}
                  color={"teal.900"}
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  You can relly your business to this app
                </Heading>
                <Text
                  color={"#68BDC2"}
                  fontSize={{ base: "14px", md: "16px" }}
                  textAlign={"justify"}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit amet lorem ipsum dolor sit amet.
                </Text>
              </VStack>
            </HStack>

            <HStack
              borderWidth={2}
              borderColor={"teal.900"}
              borderRadius={"lg"}
              p={8}
              maxW={{ base: "300px", sm: "360px", md: "300px", lg: "400px" }}
            >
              <Icon
                as={RiKey2Fill}
                color={"teal.900"}
                fontSize={"36px"}
                alignSelf={"flex-start"}
              />
              <VStack>
                <Heading
                  as={"h6"}
                  color={"teal.900"}
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  You can relly your business to this app
                </Heading>
                <Text
                  color={"#68BDC2"}
                  fontSize={{ base: "14px", md: "16px" }}
                  textAlign={"justify"}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit amet lorem ipsum dolor sit amet.
                </Text>
              </VStack>
            </HStack>

            <HStack
              borderWidth={2}
              borderColor={"teal.900"}
              borderRadius={"lg"}
              p={8}
              maxW={{ base: "300px", sm: "360px", md: "300px", lg: "400px" }}
            >
              <Icon
                as={RiKey2Fill}
                color={"teal.900"}
                fontSize={"36px"}
                alignSelf={"flex-start"}
              />
              <VStack>
                <Heading
                  as={"h6"}
                  color={"teal.900"}
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  You can relly your business to this app
                </Heading>
                <Text
                  color={"#68BDC2"}
                  fontSize={{ base: "14px", md: "16px" }}
                  textAlign={"justify"}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit amet lorem ipsum dolor sit amet.
                </Text>
              </VStack>
            </HStack>
          </Stack>
        </HStack>
      </CustomContainer>
    </section>
  );
};
