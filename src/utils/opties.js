// RecipeListPage.jsx
import { useState, useMemo } from "react";
import {
  Center,
  SimpleGrid,
  Box,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { DropDown } from "../components/DropDown";
import { getAllLabels } from "../utils/getAllLabels";

export const RecipeListPage = ({ recipes = [] }) => {
  const [selectedLabel, setSelectedLabel] = useState("");

  // ✅ Compute unique health labels only when recipes change
  const allLabels = useMemo(() => getAllLabels(recipes), [recipes]);

  // ✅ Filter recipes when a label is selected
  const filteredRecipes = useMemo(() => {
    if (!selectedLabel) return recipes;
    return recipes.filter(({ recipe }) =>
      recipe.healthLabels?.includes(selectedLabel)
    );
  }, [recipes, selectedLabel]);

  return (
    <Center flexDir="column" py={8}>
      <Heading mb={6}>Your Recipe App</Heading>

      {/* ✅ Render dropdown only when data exists */}
      {allLabels.length > 0 && (
        <DropDown options={allLabels} onFilter={setSelectedLabel} />
      )}

      {/* ✅ Show filtered recipes */}
      {filteredRecipes.length > 0 ? (
        <SimpleGrid columns={[1, 2, 3]} gap={6} mt={6}>
          {filteredRecipes.map(({ recipe }) => (
            <Box
              key={recipe.label}
              bg="white"
              rounded="2xl"
              shadow="md"
              overflow="hidden"
              _hover={{ shadow: "lg" }}
              transition="all 0.3s"
            >
              <Image
                src={recipe.image}
                alt={recipe.label}
                width="100%"
                height="200px"
              />
              <Box p={4}>
                <Text fontWeight="bold">{recipe.label}</Text>
                <Text color="gray.600">{recipe.mealType}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text mt={6}>No recipes found.</Text>
      )}
    </Center>
  );
};


oude <REcipepagelist></REcipepagelist>
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
import { SearchField } from "../components/SearchField";
import { DropDown } from "../components/DropDown";
import { getAllLabels } from "../utils/getAllLabels";
import { useState, useMemo } from "react";
import { RecipeCard } from "../components/RecipeCard";
export const RecipeListPage = () => {
  const recipes = data.hits;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const allLabels = getAllLabels(recipes);
  console.log(selectedCategory);

const filteredRecipes = useMemo(() => {
  if (!searchTerm) return recipes;
  const lower = searchTerm.toLowerCase();
  return recipes.filter(({ recipe }) =>
    recipe.label.toLowerCase().includes(lower)
  );
}, [recipes, searchTerm]);

  return (
    <Center flexDir="column">
      <Heading>Your Recipe App</Heading>

      <SearchField onSearch={setSearchTerm}/>

      {recipes.length > 0 && (
        <DropDown options={allLabels} onFilter={setSelectedCategory} />
      )}
      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {recipes.map(({ recipe }) => (
          <RecipeCard key={recipe.label} recipe={recipe} />
        ))}
      </SimpleGrid>
      <SimpleGrid columns={3} gap={1} mt={6}>
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
