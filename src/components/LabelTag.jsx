// LabelTag.jsx
import { Box, Wrap } from "@chakra-ui/react";
import { hasItems } from "../utils/hasItems";

export const LabelTag = ({ items = [], color = "green" }) => {
  if (!hasItems(items)) return null;

  return (
    <Wrap justify="center" spacing={2} mt={3}>
      {items
        .filter((item) => typeof item === "string" && item.trim() !== "")
        .map((item, index) => (
          <Box
            key={index}
            as="span"
            px="2"
            py="1"
            rounded="full"
            bg={`${color}.100`}
            color={`${color}.800`}
            fontSize="sm"
          >
            {item}
          </Box>
        ))}
    </Wrap>
  );
};
