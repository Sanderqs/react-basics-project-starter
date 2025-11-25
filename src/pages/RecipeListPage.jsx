import {
  Center,
  Heading,
  SimpleGrid,
  Text,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { data } from "../utils/data";
import { DropDown } from "../components/DropDown";
import { getAllLabels } from "../utils/getAllLabels";
import { SmallRecipeCard } from "../components/SmallRecipeCard";
import { Dialog } from "../components/Dialog";

export const RecipeListPage = () => {
  const recipes = data?.hits || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allLabels = getAllLabels(recipes);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(({ recipe }) => {
      const matchesSearch = recipe.label
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLabel =
        !selectedLabel || recipe.healthLabels?.includes(selectedLabel);

      return matchesSearch && matchesLabel;
    });
  }, [recipes, searchTerm, selectedLabel]);

  const handleOpenModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
    setIsModalOpen(false);
  };

  return (
    <Center flexDir="column" py={8} w="100%" px={{ base: 2, md: 6 }}>
      <Heading mb={4} textAlign="center" fontSize={{ base: "2xl", md: "3xl" }}>
        Your Recipe App
      </Heading>

      {/* Search Input */}
      <Input
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        w={{ base: "90%", sm: "70%", md: "50%" }}
        bg="gray.100"
        mb={3}
      />

      {/* Dropdown */}
      {recipes.length > 0 && (
        <Box w={{ base: "90%", sm: "70%", md: "50%" }} mb={4}>
          <DropDown options={allLabels} onFilter={setSelectedLabel} />
        </Box>
      )}

      {/* Modal */}
      <Dialog
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Recipe Grid */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 6, md: 8 }}
        mt={4}
        w="100%"
        maxW="1200px"
        alignItems="stretch"
        gap={"4px"}
        _dark={"black"}
        bg={{ base: "white", _dark: "black" }}
      >
        {filteredRecipes.map(({ recipe }) => (
          <Box key={recipe.label}>
            <SmallRecipeCard
              recipe={recipe}
              onClick={() => handleOpenModal(recipe)}
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* No results */}
      {filteredRecipes.length === 0 && (
        <Text color="gray.500" mt={4} fontSize={{ base: "md", md: "lg" }}>
          No recipes found.
        </Text>
      )}
    </Center>
  );
};
