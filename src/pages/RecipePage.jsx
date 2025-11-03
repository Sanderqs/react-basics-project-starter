import { Image } from "@chakra-ui/react";

export const RecipePage = ({ test }) => {
  console.log("first");
  return (
    <div>
      {test}
      <Image src="https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg" />
    </div>
  );
};
