import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <div>
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
          sx={{
            width: 200,
            height: 200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white",
          }}
        />
        <ProfileCard heading={"Bio"} text={"safgdsgf gdsfgsd asdasg asd"} />
        <ProfileCard
          heading={"Username"}
          text={"@chiragdhunna"}
          Icon={<UsernameIcon />}
        />
        <ProfileCard
          heading={"Name"}
          text={"Chirag Dhunna"}
          Icon={<FaceIcon />}
        />
        <ProfileCard
          heading={"Joined"}
          text={moment("2024-10-25T06:41:51Z").toNow()}
          Icon={<CalendarIcon />}
        />
      </Stack>
    </div>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color="gray" variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
