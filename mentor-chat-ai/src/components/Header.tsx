import { Flex, Burger, AppShellHeader } from "@mantine/core";

const Header = ({ toggle, opened }: any) => {
  return (
    <AppShellHeader>
      <Flex justify="space-between" align="center" style={{ padding: "10px 20px" }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <span className="text-3xl font-bold">Leadify</span>
      </Flex>
    </AppShellHeader>
  );
};

export default Header;
