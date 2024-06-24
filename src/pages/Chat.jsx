import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import { orange } from "../constants/color";
import FileMenu from "../components/dialogs/FileMenu";

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"#e0f7fa"}
        height={"90%"}
        sx={{ overflowY: "auto", overflowX: "hidden" }}
      >
        {/* meassage render */}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          style={{
            padding: "1rem",
            alignItems: "center",
            position: "relative",
            height: "100%",
          }}
        >
          <IconButton
            sx={{ position: "absolute", left: "1rem", rotate: "90deg" }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type a message" />
          <IconButton
            type="submit"
            sx={{
              bgcolor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": { backgroundColor: "error.dark" },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
