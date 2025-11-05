import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  // You can play around with the console log,
  // but ultimately remove it once you are done
  //   console.log(data.hits[0].recipe.label);

  const recipes = data.hits;

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <SimpleGrid>
        {recipes.map(({ recipe }) => {
          const { label, image, dietLabels, cautions, mealType, dishType } =
            recipe;

          console.log(dietLabels);
          return (
            <Box
              key={label}
              bg="white"
              rounded="2xl"
              shadow="md"
              overflow="hidden"
              _hover={{ shadow: "lg" }}
              transition="all 0.3s"
            >
              <Image src={image} alt={label} width="70%" />
              <Text color={"red"}>{mealType}</Text>
              <Text color={"red"}>{label}</Text>
              {Array.isArray(dietLabels) &&
                dietLabels.filter(Boolean).length > 0 && (
                  <Wrap justify="center" spacing={2} mt={3}>
                    {dietLabels
                      .filter(
                        (diet) => typeof diet === "string" && diet.trim() !== ""
                      )
                      .map((diet, index) => (
                        <WrapItem key={`${diet}-${index}`}>
                          <Box
                            as="span"
                            px="2"
                            py="1"
                            rounded="full"
                            bg="green.100"
                            color="green.800"
                            fontSize="sm"
                          >
                            {diet}
                          </Box>
                        </WrapItem>
                      ))}
                  </Wrap>
                )}
              <Text color={"red"}>Dish:{dishType}</Text>

              <Text color={"red"}>Dish:{dishType}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};
