import { StackProps, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  children: any;
}

export const CustomContainer = ({ children, ...props }: Props) => {
  return (
    <VStack
      align={"stretch"}
      w={"100%"}
      mx={"auto"}
      maxW={"1440px"}
      overflowX={"clip"}
      {...props}
    >
      {children}
    </VStack>
  );
};
