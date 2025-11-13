import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { LabelContent } from "./LabelContent";
import { isVeganCheck } from "../utils/isVeganCheck";

export const SmallRecipeCard = ({ recipe, onClick }) => {
  if (!recipe) return null;

  const { label, image, dietLabels = [], healthLabels = [], mealType } = recipe;

  const veganLabels = isVeganCheck(healthLabels, ["Vegetarian", "Vegan"]);

  return (
    <Box
      bg="white"
      rounded="2xl"
      shadow="md"
      overflow="hidden"
      _hover={{ shadow: "lg", cursor: "pointer" }}
      transition="all 0.3s"
      p={3}
      onClick={() => onClick && onClick(recipe)}
    >
      <Image
        src={image}
        alt={label}
        width="100%"
        height="150px"
        objectFit="cover"
      />
      <Text fontWeight="bold" mt={2} noOfLines={1}>
        {label}
      </Text>
      {mealType && (
        <Text color="gray.600" fontSize="sm">
          {mealType}
        </Text>
      )}

      {/* Diet Labels */}
      <LabelContent title="Diet" items={dietLabels} color="green" />

      {/* Vegan / Vegetarian pills */}
      {veganLabels.length > 0 && (
        <Wrap justify="center" spacing={2} mt={1}>
          {veganLabels.map((vLabel) => (
            <WrapItem key={vLabel}>
              <Box
                as="span"
                px="2"
                py="1"
                rounded="full"
                bg="green.100"
                color="green.800"
                fontSize="xs"
                fontWeight="semibold"
              >
                {vLabel}
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </Box>
  );
};
