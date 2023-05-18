import { Button, Typography } from "@mui/material";
import { blueButton } from "../../styles/buttons";
import CircularProgress from "@mui/material/CircularProgress";

export const BlueButton = ({
  children,
  type,
  buttonWidth,
  buttonStartIcon,
  onClick,
  submitting,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      startIcon={buttonStartIcon}
      sx={{ ...blueButton, width: buttonWidth }}
      disableElevation
      disabled={submitting}
    >
      {submitting && <CircularProgress size={20} sx={{ color: "white" }} />}
      <Typography ml={1}>{children}</Typography>
    </Button>
  );
};
