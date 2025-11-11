
import { Select } from "@chakra-ui/react";

export const SelectFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value); 
  };

  return (
    <Select
      placeholder="Filter by health label"
      onChange={handleChange}
      w="30%"
      bg="gray.200"
      color="black"
    ></Select>
  );
};
