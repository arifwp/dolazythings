import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { CustomContainer } from "../components/CustomContainer";

export const Options = () => {
  return (
    <section id="optionsSection">
      <CustomContainer>
        <HStack
          bgColor={"teal.900"}
          px={8}
          py={14}
          spacing={12}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <VStack
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "fit-content",
            }}
            color={"white"}
            align={"stretch"}
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "left",
            }}
          >
            <Heading as={"h1"}>Find the best plan for your bussiness</Heading>
            <Text>
              Business plan that fits into your business scale, not the other
              way around
            </Text>
          </VStack>

          <HStack
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "fit-content",
            }}
            spacing={{ lg: 10 }}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <VStack spacing={4}>
              <Image
                src="https://placehold.co/600x400/png"
                boxSize="100px"
                objectFit={"cover"}
                borderRadius="full"
              />
              <Text as={"b"}>Offline Payment</Text>
            </VStack>

            <VStack spacing={4}>
              <Image
                src="https://placehold.co/600x400/png"
                boxSize="100px"
                objectFit={"cover"}
                borderRadius="full"
              />
              <Text as={"b"}>Online Payment</Text>
            </VStack>
          </HStack>
        </HStack>
      </CustomContainer>
    </section>
  );
};
