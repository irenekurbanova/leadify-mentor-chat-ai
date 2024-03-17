// import { LuSearch } from "react-icons/lu";
// import { MdOutlineInfo } from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io5";
// import { PiSignInBold } from "react-icons/pi";
// import { NavLink } from "react-router-dom";
// import { LuUser2, LuLogOut } from "react-icons/lu";
import { CircleUserRound } from "lucide-react";
import QueryHistory from "./QueryHistory";
import logoURL from "/logo.png";
import { Box, Title, Text, Image, Group, Stack, ScrollArea } from "@mantine/core";

// type NavigationProps = {
//   open: () => void;
// };

const Navigation = () => {
  return (
    <Stack component="nav">
      <ScrollArea h={"90vh"} w={"100%"} type="hover" scrollbars="y" offsetScrollbars>
        <Stack justify="space-between">
          <Box pos="sticky" top={0} className="bg-stone-900">
            <Group grow gap="xs">
              <Image radius="md" h={35} w={45} src={logoURL} />
              <Title>Leadify</Title>
            </Group>
          </Box>
          <QueryHistory />
        </Stack>
      </ScrollArea>
      <Group gap="sm">
        <CircleUserRound />
        <Text>UserName</Text>
      </Group>
    </Stack>
  );
};

export default Navigation;
