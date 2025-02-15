import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useState } from "react";
import {
  useAddGroupMemberMutation,
  useAvailableFriendsQuery,
} from "../../redux/api/api";
import { useAsyncMutation, useErrors } from "../hooks/hook";
import { useDispatch, useSelector } from "react-redux";
import { setIsAddMember } from "../../redux/reducers/misc";

const AddMemberDialog = ({ chatId }) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(setIsAddMember(false));
    setMembers([]);
    setSelectedMembers([]);
  };

  const addMemberSubmitHandler = () => {
    addMembers("Adding Members ...", { members: selectedMembers, chatId });
    closeHandler();
  };

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const { isAddMember } = useSelector((state) => state.misc);

  const { isLoading, data, isError, error } = useAvailableFriendsQuery(chatId);

  const [addMembers, isLoadingAddMember] = useAsyncMutation(
    useAddGroupMemberMutation
  );

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currentElement) => currentElement !== id)
        : [...prev, id]
    );
  };

  useErrors([{ isError, error }]);

  return (
    <Dialog open={isAddMember} onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {isLoading ? (
            <Skeleton />
          ) : data?.friends?.length > 0 ? (
            data?.friends?.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button onClick={closeHandler} color="error">
            Cancel
          </Button>
          <Button
            onClick={addMemberSubmitHandler}
            variant="contained"
            disabled={isLoadingAddMember}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
