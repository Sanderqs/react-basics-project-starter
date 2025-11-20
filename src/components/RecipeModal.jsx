import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { LabelContent } from "./LabelContent";

export const RecipeModal = ({ recipe, isOpen, onClose }) => {
  if (!recipe) return null;

  const {
    label = "No title",
    image = "",
    mealType = [],
    dishType = [],
    totalTime = 0,
    dietLabels = [],
    healthLabels = [],
    cautions = [],
    ingredientLines = [],
    yield: servings = "N/A",
    totalNutrients = {},
  } = recipe;

  const nutrients = {
    energy: totalNutrients?.ENERC_KCAL?.quantity?.toFixed(0) || "N/A",
    protein: totalNutrients?.PROCNT?.quantity?.toFixed(1) || "N/A",
    fat: totalNutrients?.FAT?.quantity?.toFixed(1) || "N/A",
    carbs: totalNutrients?.CHOCDF?.quantity?.toFixed(1) || "N/A",
    cholesterol: totalNutrients?.CHOLE?.quantity?.toFixed(1) || "N/A",
    sodium: totalNutrients?.NA?.quantity?.toFixed(1) || "N/A",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{label}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {image && (
            <Image
              src={image}
              alt={label}
              w="100%"
              h="250px"
              objectFit="cover"
              mb={4}
            />
          )}

          <Text fontWeight="bold">Meal type:</Text>
          <Text mb={2}>{mealType.join(", ") || "N/A"}</Text>

          <Text fontWeight="bold">Dish type:</Text>
          <Text mb={2}>{dishType.join(", ") || "N/A"}</Text>

          {totalTime > 0 && (
            <>
              <Text fontWeight="bold">Total time:</Text>
              <Text mb={2}>{totalTime} min</Text>
            </>
          )}

          <LabelContent title="Diet" items={dietLabels} color="green" />
          <LabelContent
            title="Health Labels"
            items={healthLabels}
            color="blue"
          />
          <LabelContent title="Cautions" items={cautions} color="red" />

          {ingredientLines.length > 0 && (
            <>
              <Text fontWeight="bold" mt={3}>
                Ingredients:
              </Text>
              <Stack spacing={1} mb={2}>
                {ingredientLines.map((ing, i) => (
                  <Text key={i} fontSize="sm">
                    • {ing}
                  </Text>
                ))}
              </Stack>
            </>
          )}

          <Text fontWeight="bold">Servings: {servings}</Text>

          <Text fontWeight="bold" mt={2}>
            Nutrients:
          </Text>
          <Text fontSize="sm">Energy: {nutrients.energy} kcal</Text>
          <Text fontSize="sm">Protein: {nutrients.protein} g</Text>
          <Text fontSize="sm">Fat: {nutrients.fat} g</Text>
          <Text fontSize="sm">Carbs: {nutrients.carbs} g</Text>
          <Text fontSize="sm">Cholesterol: {nutrients.cholesterol} mg</Text>
          <Text fontSize="sm">Sodium: {nutrients.sodium} mg</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
