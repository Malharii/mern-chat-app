import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";
const Notifications = () => {
  const friendRequestHandler = (_id, accept) => {
    //add friend request handler
  };

  return (
    <Dialog open>
      <Stack
        p={{ xs: "1rem", sm: "2rem" }}
        maxWidth={"30rem"}
        maxHeight={"15rem"}
        sx={{ bgcolor: "#b2ebf2" }}
      >
        <DialogTitle textAlign={"center"}>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({ sender, _id }) => (
            <NotificationsItem
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
              key={_id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};
const NotificationsItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem variant="rounded" open>
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
          }}
        >
          {`${name} sent you a friend request `}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler(_id, true)}>Accept </Button>
          <Button color="error" onClick={() => handler(_id, false)}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});
export default Notifications;
