import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { data } from "../utils/data";

import { LabelContent } from "../components/LabelContent";

export const RecipeListPage = () => {
  const recipes = data.hits;
  return (
    <Center flexDir="column">
      <Heading>Your Recipe App</Heading>
      <SimpleGrid columns={2} gap={1}>
        {recipes.map(({ recipe }) => {
          const {
            label,
            image,
            dietLabels,
            cautions,
            mealType,
            dishType,
            healthLabels,
          } = recipe;

          return (
            <Box
              key={label}
              bg="white"
              rounded="2xl"
              shadow="md"
              overflow="hidden"
              _hover={{ shadow: "lg" }}
              transition="all 0.3s"
              p={3}
            >
              <Image src={image} alt={label} width="100%" height="200px" />
              <Text color="red">{mealType}</Text>
              <Text color="red">{label}</Text>
              <Text color="red">Dish: {dishType}</Text>

              <LabelContent title="Diet" items={dietLabels} color="green" />
              <LabelContent title="Cautions" items={cautions} color="red" />
              <LabelContent title="Vegan" items={healthLabels} color="red" />
            </Box>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};
