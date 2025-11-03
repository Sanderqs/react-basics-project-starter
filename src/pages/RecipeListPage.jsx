import {
  Center,
  Heading,
  Image,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  // You can play around with the console log,
  // but ultimately remove it once you are done
  //   console.log(data.hits[0].recipe.label);

  const recipes = data.hits;

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {recipes.map(({ recipe }) => {
          const { label, image, dietLabels, cautions, mealType, dishType } =
            recipe;

          console.log(image);
          return (
            <div
              key={label}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Text>{label}</Text>
              <Image src={image} alt={label} h="200px" w="200px" />
              {dietLabels && dietLabels.length > 0 && (
                <Wrap justify="center" spacing={2}>
                  {dietLabels.map((diet) => (
                    <WrapItem key={diet}>
                      <Tag>{diet}</Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              )}
            </div>
          );
        })}
      </div>
    </Center>
  );
};
