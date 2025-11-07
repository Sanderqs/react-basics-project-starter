export function isVeganCheck(healthLabels, labelsCheck) {
  if (!Array.isArray(healthLabels)) return [];
  const checkArray = Array.isArray(labelsCheck) ? labelsCheck : [labelsCheck];

  return checkArray.filter((label) =>
    healthLabels.some(
      (item) =>
        typeof item === "string" && item.toLowerCase() === label.toLowerCase()
    )
  );
}
