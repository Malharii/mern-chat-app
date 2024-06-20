import { Add as AddIcon } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem variant="rounded">
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        sx={{ bgcolor: "grey.200" }}
      >
        <Avatar />

        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            flexFlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            fontVariant: "all-small-caps",
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&hover": { bgcolor: "primary.dark" },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
