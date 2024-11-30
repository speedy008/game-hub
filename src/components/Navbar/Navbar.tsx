import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize="60px" />
      <Text>Navbar</Text>
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
