import { Grid, GridItem, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Grid templateAreas={{ base: `'nav' 'main'`,lg: `'nav nav' 'aside main'` }}>
      <GridItem gridArea="nav" bg="purple.900" >
        <Navbar />
      </GridItem>
      <Box display={{ base: 'none', lg: 'block' }}>
        <GridItem gridArea="aside" bg="coral" >
          Aside
        </GridItem>
      </Box>
      <GridItem gridArea="main" bg="tomato">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
