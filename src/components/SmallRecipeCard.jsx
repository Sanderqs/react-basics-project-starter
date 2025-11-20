import {
  Box,
  Image,
  Text,
  Wrap,
  WrapItem,
  AspectRatio,
} from "@chakra-ui/react";
import { LabelContent } from "./LabelContent";
import { isVeganCheck } from "../utils/isVeganCheck";

export const SmallRecipeCard = ({ recipe, onClick }) => {
  if (!recipe) return null;

  const {
    label = "No title",
    image = "",
    mealType = [],
    dishType = [],
    dietLabels = [],
    cautions = [],
    healthLabels = [],
    ingredients = [],
    nutrition = [],
  } = recipe;

  const veganLabels = isVeganCheck(healthLabels, ["Vegan", "Vegetarian"]);

  return (
    <Box
      bg="white"
      rounded="2xl"
      shadow="md"
      overflow="hidden"
      p={3}
      cursor="pointer"
      _hover={{ shadow: "lg", transform: "scale(1.02)" }}
      transition="all 0.2s"
      onClick={() => onClick(recipe)}
      display="flex"
      flexDirection="column"
      h="100%" // important: fill the grid cell height
      minH="400px" // optional: ensures a minimum height
    >
      {/* Image */}
      {image && (
        <AspectRatio ratio={4 / 3} w="100%" mb={3}>
          <Image src={image} alt={label} objectFit="cover" borderRadius="md" />
        </AspectRatio>
      )}

      {/* Title */}
      <Text fontWeight="bold" mt={1} fontSize={["md", "lg"]}>
        {label}
      </Text>

      <Text fontSize="sm" color="gray.600" mb={2}>
        {mealType.join(", ") || "N/A"} | {dishType.join(", ") || "N/A"}
      </Text>

      {/* Diet */}
      {dietLabels.length > 0 && (
        <LabelContent title="Diet" items={dietLabels} color="green" mt={2} />
      )}

      {/* Vegan / Vegetarian */}
      {veganLabels.length > 0 && (
        <Wrap justify="center" spacing={2} mt={2}>
          {veganLabels.map((vLabel) => (
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

      {/* Ingredients */}
      {ingredients.length > 0 && (
        <Box mt={3}>
          <LabelContent title="Ingredients" items={ingredients} color="blue" />
        </Box>
      )}

      {/* Nutrition */}
      {nutrition.length > 0 && (
        <Box mt={3}>
          <LabelContent title="Nutrition" items={nutrition} color="orange" />
        </Box>
      )}

      {/* Cautions pushed to bottom */}
      {cautions.length > 0 && (
        <Box mt="auto">
          <LabelContent title="Cautions" items={cautions} color="red" />
        </Box>
      )}
    </Box>
  );
};
