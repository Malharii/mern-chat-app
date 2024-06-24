import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar, isAdded } = user;
  return (
    <ListItem variant="rounded">
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
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
            width: "100%",
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "info.main",
            color: "white",
            "&:hover": { bgcolor: isAdded ? "error.dark" : "info.dark" },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
