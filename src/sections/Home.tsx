import {
  Button,
  HStack,
  Heading,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import useScreenWidth from "../lib/useScreenWidth";

const Home = () => {
  const sw = useScreenWidth();
  const columnReverse = sw <= 768 ? "column" : "row";

  return (
    <section id="homeSection">
      <VStack
        maxW={"100vw"}
        minH={"calc(100vh - 75px)"}
        bg={"white"}
        px={8}
        py={14}
      >
        <HStack
          w={"100%"}
          flex={1}
          flexDirection={columnReverse}
          spacing={10}
          display={"flex"}
          flexWrap={"wrap"}
        >
          <VStack
            flex={{ sm: "100%", md: "40%", lg: "40%" }}
            color={"teal.800"}
            alignItems={"flex-start"}
            alignSelf={"center"}
          >
            <Heading
              as={"h1"}
              fontSize={{ base: "40px", sm: "60px", md: "50px", lg: "40px" }}
            >
              Self Service Photobooth Apps
            </Heading>
            <Text
              mt={4}
              fontSize={{ base: "12px", sm: "14px", md: "14px", lg: "18px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </Text>
            <Button
              bgColor={"teal.900"}
              textColor={"white"}
              _hover={{ bgColor: "teal.500" }}
              mt={4}
              borderRadius={"full"}
            >
              See Pricing
            </Button>
          </VStack>

          <VStack
            alignItems={{ sm: "", md: "flex-end" }}
            flex={{ sm: "100%", md: "40%", lg: "40%" }}
            spacing={8}
            alignSelf={{ md: "stretch" }}
            justifyContent={{ md: "space-evenly" }}
          >
            <VStack maxW={{ sm: "300px", md: "340px" }} alignSelf={"center"}>
              <Image
                src={"/images/undraw_camera_re_cnp4.svg"}
                objectFit={"contain"}
              />
            </VStack>

            <HStack
              align={"flex-start"}
              color={"teal.900"}
              textAlign={"center"}
              spacing={3}
              divider={<StackDivider borderColor={"teal.900"} opacity={0.3} />}
            >
              <VStack>
                <Heading
                  as={"h6"}
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "12px",
                    lg: "18px",
                  }}
                >
                  SMART
                </Heading>
                <Text
                  mt={4}
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "12px",
                    lg: "18px",
                  }}
                >
                  Has smart maintenance and smart team
                </Text>
              </VStack>

              <VStack>
                <Heading
                  as={"h6"}
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "12px",
                    lg: "18px",
                  }}
                >
                  FLEXIBLE
                </Heading>
                <Text
                  mt={4}
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "12px",
                    lg: "18px",
                  }}
                >
                  This apps is flexible because this is has no shape
                </Text>
              </VStack>

              <VStack>
                <Heading
                  as={"h6"}
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "12px",
                    lg: "18px",
                  }}
                >
                  RELIABLE
                </Heading>
                <Text
                  mt={4}
                  fontSize={{
                    base: "12px",
                    sm: "14px",
                    md: "12px",
                    lg: "18px",
                  }}
                >
                  You can relly your bussiness to this app
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </section>
  );
};

export default Home;
