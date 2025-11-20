import { Input } from "@chakra-ui/react";
import { useState } from "react";

export const SearchField = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(e.target.value);
    onSearch(newValue);
  };
  return (
    <>
      <Input
        onChange={handleChange}
        w="30%"
        bg="gray.200"
        color="black"
        value={value}
      />
    </>
  );
};
