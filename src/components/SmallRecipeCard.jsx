import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
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
    >
      {image && (
        <Image
          src={image}
          alt={label}
          width="100%"
          height="150px"
          objectFit="cover"
        />
      )}
      <Text fontWeight="bold" mt={2}>
        {label}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {mealType.join(", ") || "N/A"} | {dishType.join(", ") || "N/A"}
      </Text>

      <LabelContent title="Diet" items={dietLabels} color="green" />

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

      <LabelContent title="Cautions" items={cautions} color="red" />
    </Box>
  );
};
