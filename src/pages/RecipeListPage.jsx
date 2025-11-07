import {
  Wrap,
  WrapItem,
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { LabelContent } from "../components/LabelContent";
import { isVeganCheck } from "../utils/isVeganCheck";

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
          const isVegan = isVeganCheck(healthLabels, ["Vegetarian", "Vegan"]);
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

              {isVegan.length > 0 && (
                <Wrap justify="center" spacing={2} mt={2}>
                  {isVegan.map((vLabel) => (
                    <WrapItem key={vLabel}>
                      <Box
                        as="span"
                        px="2"
                        py="1"
                        rounded="full"
                        bg="green.100"
                        color="green.800"
                        fontSize="sm"
                        fontWeight="semibold"
                      >
                        {vLabel}
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>
              )}
              <LabelContent title="Cautions" items={cautions} color="red" />
            </Box>
          );
        })}
      </SimpleGrid>
    </Center>
  );
};
