export function hasItems(array) {
  // Check 1: is it actually an array?
  if (!Array.isArray(array)) {
    return false;
  }

  return array.some((item) => typeof item === "string" && item.trim() !== "");
}
