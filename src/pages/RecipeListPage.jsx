import { useState, useMemo } from "react";
import { Center, Heading, Text, SimpleGrid, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { DropDown } from "../components/DropDown";
import { getAllLabels } from "../utils/getAllLabels";
import { SmallRecipeCard } from "../components/SmallRecipeCard";
import { RecipeModal } from "../components/RecipeModal";

export const RecipeListPage = () => {
  const recipes = data?.hits || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(""); // dropdown
  const [selectedRecipe, setSelectedRecipe] = useState(null); // modal
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

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
    setIsModalOpen(false);
  };

  return (
    <Center flexDir="column" py={8} gap={4} w="100%">
      <Heading mb={4}>Your Recipe App</Heading>

      <Input
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        w={["90%", "60%", "40%"]}
        bg="gray.200"
        color="black"
        mb={2}
      />

      {recipes.length > 0 && (
        <DropDown options={allLabels} onFilter={setSelectedLabel} />
      )}

      <SimpleGrid columns={[1, 2, 3]} gap={6} mt={4} w="100%">
        {filteredRecipes.map(({ recipe }) => (
          <SmallRecipeCard
            key={recipe.label}
            recipe={recipe}
            onClick={handleCardClick}
          />
        ))}
      </SimpleGrid>

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {filteredRecipes.length === 0 && (
        <Text color="gray.500" mt={4}>
          No recipes found.
        </Text>
      )}
    </Center>
  );
};
