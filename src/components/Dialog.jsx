import {
  Box,
  Text,
  Wrap,
  WrapItem,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { isVeganCheck } from "../utils/isVeganCheck";

export const Dialog = ({ recipe, isOpen, onClose }) => {
  if (!isOpen || !recipe) return null;

  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels = [],
    healthLabels = [],
    cautions = [],
    ingredientLines = [],
    servings,
    totalNutrients = {},
  } = recipe;

  const veganLabels = isVeganCheck(healthLabels, ["Vegan", "Vegetarian"]);

  return (
    <>
      {/* Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        bg="blackAlpha.600"
        zIndex={1000}
        onClick={onClose}
      />

      {/* Dialog Content */}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="gray.50"
        p={{ base: 4, md: 6 }}
        rounded="3xl"
        shadow="2xl"
        zIndex={1001}
        maxW="900px"
        w="95%"
        maxH="90vh"
        overflowY="auto"
      >
        {/* Close Button */}
        <Text
          textAlign="right"
          fontWeight="bold"
          cursor="pointer"
          onClick={onClose}
          mb={4}
        >
          ✖
        </Text>

        {/* Header: Image + Title */}
        <Flex direction={["column", "row"]} gap={4} align="center" mb={4}>
          {image && (
            <Image
              src={image}
              alt={label}
              borderRadius="md"
              objectFit="cover"
              maxW={["100%", "250px"]}
              maxH="200px"
            />
          )}
          <Box flex={1}>
            <Text fontSize="3xl" fontWeight="bold" color="orange.600">
              {label}
            </Text>
            <Text color="gray.600" mt={1}>
              {mealType && `Meal: ${mealType}`}{" "}
              {dishType && `| Dish: ${dishType}`}
            </Text>
            {totalTime > 0 && (
              <Text mt={1} color="black">
                Cooking time: {totalTime} min
              </Text>
            )}
          </Box>
        </Flex>

        {/* Badges: Diet / Health / Cautions */}
        <Wrap spacing={2} mb={6}>
          {dietLabels.map((d) => (
            <WrapItem key={d}>
              <Box
                px={2}
                py={1}
                rounded="full"
                bg="green.200"
                color="green.900"
                fontSize="sm"
              >
                {d}
              </Box>
            </WrapItem>
          ))}
          {veganLabels.map((v) => (
            <WrapItem key={v}>
              <Box
                px={2}
                py={1}
                rounded="full"
                bg="teal.200"
                color="teal.900"
                fontSize="sm"
              >
                {v}
              </Box>
            </WrapItem>
          ))}
          {cautions.map((c) => (
            <WrapItem key={c}>
              <Box
                px={2}
                py={1}
                rounded="full"
                bg="red.100"
                color="red.800"
                fontSize="sm"
              >
                {c}
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        {/* Ingredients + Nutrients */}
        <SimpleGrid columns={[1, 2]} spacing={6} mb={6}>
          {/* Ingredients */}
          <Box bg="orange.50" p={5} rounded="xl" minH="200px">
            <Text fontWeight="bold" fontSize="lg" mb={3} color="orange.600">
              Ingredients
            </Text>
            <Box as="ul" pl={4}>
              {ingredientLines.map((line, idx) => (
                <Text as="li" key={idx} mb={1} color="orange.600">
                  {line}
                </Text>
              ))}
            </Box>
          </Box>

          {/* Nutrients */}
          <Box bg="green.50" p={5} rounded="xl" minH="200px">
            <Text fontWeight="bold" fontSize="lg" mb={3} color="green.600">
              Nutrients
            </Text>
            <Box>
              {[
                { key: "ENERC_KCAL", label: "Energy", unit: "kcal" },
                { key: "PROCNT", label: "Protein", unit: "g" },
                { key: "FAT", label: "Fat", unit: "g" },
                { key: "CHOCDF", label: "Carbs", unit: "g" },
                { key: "CHOLE", label: "Cholesterol", unit: "mg" },
                { key: "NA", label: "Sodium", unit: "mg" },
              ].map(({ key, label, unit }) => (
                <Text key={key} color="green.700" mb={1}>
                  {label}: {totalNutrients[key]?.quantity?.toFixed(1) || "N/A"}{" "}
                  {unit}
                </Text>
              ))}
            </Box>
          </Box>
        </SimpleGrid>

        {/* Servings */}
        {servings && <Text fontWeight="semibold">Servings: {servings}</Text>}
      </Box>
    </>
  );
};
