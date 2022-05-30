import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";

const ProductCard = ({ productName, productImage, stock, price }) => {
  return (
    <Box w="250px" rounded="20px" overflow="hidden" boxShadow="lg">
      <Image src={"https://i.pinimg.com/474x/b3/54/c2/b354c27f30e94652111e313a4fc5447a.jpg"} alt="Product Image" />
      <Box p={5}>
        <Stack fontSize="sm">
          <Text>Name Prodyct</Text>
          <Text>Rp. 1000</Text>
          <Text>Stock: 2</Text>
        </Stack>
        <Box textAlign="center">
          <Button
            colorScheme="teal"
            size="sm"
            mt={3}
            boxShadow="md"
            width="100%"
          >
            Add Order
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;