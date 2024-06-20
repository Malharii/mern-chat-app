import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "10rem",
          height: "10rem",
          objectFit: "fit",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"har har mahadev"} />
      <ProfileCard
        heading={"Username"}
        text={"_._malhar_._"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Malhari Pawar"}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-01-21T18:30:00.000Z").fromNow()}
        Icon={<CalendarMonthIcon />}
      />
    </Stack>
  );
};
const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    color={"white"}
    spacing={"1rem"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
