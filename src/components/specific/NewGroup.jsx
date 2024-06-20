import React from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
const NewGroup = () => {
  const selectMemberHandler = () => {};
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"}>
        <DialogTitle textAlign={"center"}>New Group</DialogTitle>
        <TextField />
        <Typography>Members</Typography>
        <Stack>
          {sampleUsers.map((i) => (
            <UserItem key={i._id} user={i} handler={selectMemberHandler} />
          ))}
        </Stack>
        <Stack direction={"row"}>
          <Button variant="text" color="error">
            cancel
          </Button>
          <Button variant="outlined">Create New </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
