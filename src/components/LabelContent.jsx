// LabelSection.jsx
import { Text } from "@chakra-ui/react";
import { hasItems } from "../utils/hasItems";
import { LabelTag } from "./labelTag";

export const LabelContent = ({ title, items, color }) => {
  if (!hasItems(items)) return null;
  else items === "healthLabels";
  console.log(items);

  return (
    <>
      <Text color={`${color}.600`} fontWeight="bold">
        {title}:
      </Text>
      <LabelTag items={items} color={color} />
    </>
  );
};
