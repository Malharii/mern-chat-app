import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",

  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: "0",
});
