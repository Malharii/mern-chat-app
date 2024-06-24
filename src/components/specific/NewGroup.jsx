import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [slectedMembers, setSlectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setMembers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, isAdded: !user.isAdded } : user
      )
    );
    setSlectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((curentElement) => customElements !== id)
        : [...prev, id]
    );
  };

  const closeHandler = () => {};
  const submitHandler = () => {};
  return (
    <Dialog open onClick={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle variant="h4" textAlign={"center"}>
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
          color="success"
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem
              key={i._id}
              user={i}
              handler={selectMemberHandler}
              isAdded={slectedMembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            cancel
          </Button>
          <Button color="info" size="large" onClick={submitHandler}>
            Create New
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
