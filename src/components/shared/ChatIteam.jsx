import React, { memo } from "react";
import { Link } from "../styels/StyeldComponets";
import { Stack, Typography, Box } from "@mui/material";
import AvatarCard from "../shared/AvatarCard";
const ChatIteam = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleChatDelete,
}) => {
  return (
    <Link
      sx={{
        padding: 0,
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleChatDelete(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
          padding: "1rem",
          color: sameSender ? "white" : "unset",
          backgroundColor: sameSender ? "black" : "unset",
        }}
      >
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count}New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatIteam);
