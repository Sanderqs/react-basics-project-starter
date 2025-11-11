import { NativeSelect } from "@chakra-ui/react";

export const DropDown = ({ options = [], onFilter }) => {
  console.log(options);
  return (
    <NativeSelect.Root size="sm" width="240px">
      <NativeSelect.Field
        placeholder="Choose a category"
        onChange={(e) => onFilter(e.target.value)}
      >
        {options.map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};
