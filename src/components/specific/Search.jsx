import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";
import { useDispatch, useSelector } from "react-redux";
import { setIsSearch } from "../../redux/reducers/misc";

const Search = () => {
  const dispatch = useDispatch();

  const { isSearch } = useSelector((state) => state.misc);

  const search = useInputValidation("");

  const addFriendHandler = (id) => {
    console.log(id);
  };

  const searchCloseHandler = () => dispatch(setIsSearch(false));

  let isLoadingSendFriendRequest = false;

  const [users, setUsers] = useState(sampleUsers);
  return (
    <Dialog open={isSearch} onClose={searchCloseHandler}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
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
        ></TextField>
      </Stack>
      <List>
        {users.map((i) => (
          <UserItem
            user={i}
            key={i._id}
            handler={addFriendHandler}
            handlerIsLoading={isLoadingSendFriendRequest}
          />
        ))}
      </List>
    </Dialog>
  );
};

export default Search;
