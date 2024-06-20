import { Stack } from "@mui/material";
import React from "react";
import ChatIteam from "../shared/ChatIteam";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleChatDelete,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats.map((data, index) => {
        const { _id, name, avatar, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <ChatIteam
            index={index}
            key={_id}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleChatDelete={handleChatDelete}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
