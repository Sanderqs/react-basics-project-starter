export const LabelTag = ({ recipes }) => {
  console.log(recipes);
  return (
    <>
      <h1>test</h1>

      {recipes.map(({ recipe }, index) => (
        <h1 key={index}>{recipe.cautions}</h1>
      ))}
    </>
    // <Wrap justify="center" spacing={2} mt={3}>
    //   {dietLabels
    //     .filter((diet) => typeof diet === "string" && diet.trim() !== "")
    //     .map((diet, index) => (
    //       <WrapItem key={`${diet}-${index}`}>
    //         <Box
    //           as="span"
    //           px="2"
    //           py="1"
    //           rounded="full"
    //           bg="green.100"
    //           color="green.800"
    //           fontSize="sm">
    //           {diet}
    //         </Box>
    //       </WrapItem>
    //     ))}
    // </Wrap>
  );
};
