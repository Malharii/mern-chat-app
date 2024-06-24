import React from "react";

import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { samepleChats } from "../../constants/sampleData";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import Profile from "../specific/Profile";
import Header from "./Header";
const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleChatDelete = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete chat", _id, groupChat);
    };
    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
            height={"100%"}
          >
            <ChatList
              chats={samepleChats}
              chatId={chatId}
              handleChatDelete={handleChatDelete}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            sx={{
              display: {
                xs: "none",
                md: "block",
                padding: "2rem",
                backgroundColor: "#455a64",
              },
            }}
            md={4}
            lg={3}
            height={"100%"}
          >
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default AppLayout;
