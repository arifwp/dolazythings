import { HStack, StackProps, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  children: any;
}

export const PageContainer = ({ children }: Props) => {
  return (
    <VStack
      gap={0}
      spacing={0}
      minH={"100vh"}
      w={"100%"}
      bgColor={"black"}
      align={"stretch"}
    >
      {children}
    </VStack>
  );
};
