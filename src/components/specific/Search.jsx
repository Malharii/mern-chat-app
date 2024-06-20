import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";

const Search = () => {
  const search = useInputValidation("");
  let isLoadingFriendHandelerRequest = false;
  const addFriendHandler = (id) => {
    console.log(id);
  };
  const [users, setUsers] = useState(sampleUsers);

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"22rem"}>
        <DialogTitle textAlign={"center"}>Find Pepole</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((i) => (
            <UserItem
              key={i._id}
              user={i}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingFriendHandelerRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
