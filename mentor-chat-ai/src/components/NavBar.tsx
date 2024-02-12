import { AppShell, NavLink, Button } from "@mantine/core";
import { FaHome, FaInfoCircle, FaCompass, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppShell.Navbar p="md" style={{ gap: "10px" }}>
      <NavLink label="Home" onClick={() => navigate("/home")} leftSection={<FaHome />} />
      <NavLink label="About" onClick={() => navigate("/about")} leftSection={<FaInfoCircle />} />
      <NavLink label="Discover" onClick={() => navigate("/discover")} leftSection={<FaCompass />} />
      <NavLink label="Sign In" component="button" leftSection={<FaSignInAlt />} />
      <Button variant="filled">Sign Up</Button>
    </AppShell.Navbar>
  );
};

export default NavBar;
