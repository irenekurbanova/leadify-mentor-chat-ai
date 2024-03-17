import { Anchor, Stack, Text, Group, ActionIcon, Box } from "@mantine/core";
import { Share, Trash } from "lucide-react";

type QueryItemProps = {
  id: string;
  date: string;
  query: string[];
};

const QueryItem = ({ id, date, query }: QueryItemProps) => {
  return (
    <Stack justify="space-between">
      <Text size="sm">{date}</Text>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        <Box>
          {query.length > 1 ? (
            query.map((item) => (
              <Group grow p={7} key={item} className=" hover:bg-white/[.05] hover:rounded-md">
                <Text truncate size="sm" c="gray.2">
                  {item}
                </Text>
                {/* <Box className="self-end">
                  <ActionIcon variant="light" aria-label="Settings">
                    <Share size={12} />
                  </ActionIcon>
                  <ActionIcon variant="light" aria-label="Settings" mx={5}>
                    <Trash size={12} />
                  </ActionIcon>
                </Box> */}
              </Group>
            ))
          ) : (
            <Group grow p={7} key={query.length} className="hover:bg-white/[.05] hover:rounded-md">
              <Text truncate size="sm" c="gray.2">
                {query}
              </Text>
              {/* <Box className="self-end">
                <ActionIcon variant="light" aria-label="Settings">
                  <Share size={12} />
                </ActionIcon>
                <ActionIcon variant="light" aria-label="Settings" mx={5}>
                  <Trash size={12} />
                </ActionIcon>
              </Box> */}
            </Group>
          )}
        </Box>
      </Anchor>
    </Stack>
  );
};

export default QueryItem;
