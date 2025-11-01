import { Center, Heading, Image, Text } from "@chakra-ui/react";
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
        {recipes.map((recipe) => {
          const { label, image, dietLabels, countions, mealType, dishType } =
            recipe;
          return (
            <div
              key={label}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Text>{label}</Text>
              <Image src={image} h={"200px"} w={"200px"} />
            </div>
          );
        })}
      </div>
    </Center>
  );
};
