import theme from "./theme";

export const blueButton = {
  textTransform: "none",
  backgroundImage: "linear-gradient(45deg, #191359 0%, #562FAB 100%)",
  color: "#FFFFFF",
  width: {
    xs: "100%",
    // sm: theme.spacing(161 / SPACE),
  },
  padding: theme.spacing(1.25, 2.25),
  borderRadius: 2,
  height: "44px",
  fontWeight: 500,
  fontSize: "80%",
  "&:hover": {
    backgroundImage: "linear-gradient(45deg, #562FAB 0%, #191359 100%)",
  },
};
