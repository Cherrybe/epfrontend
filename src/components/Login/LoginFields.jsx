import {
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { FormInput } from "./FormInput";
import { LoginData } from "../../constants/LoginData";
import { BlueButton } from "../Buttons/BlueButton";
import logo from "../../asstes/logo.png"

export const LoginForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "rgba(208, 213, 221, .2)"
      }}
    >
      <img src={logo} alt=""/>
      
      <form method="post">
        <Typography
          sx={{
            color: "#101828",
            fontWeight: 600,
            fontSize: 30,
            marginBottom: 1,
          }}
          textAlign="center"
        >
          Welcome Back
        </Typography>
        <Typography
          sx={{
            color: "#667085",
            fontSize: "16px",
            fontWeight: 400,
            marginBottom: 4,
          }}
        >
          Welcome back! Please enter your details.
        </Typography>
        <Stack spacing={20 / 8} mb={3}>
          {LoginData?.map((field) => (
            <FormInput
              fullwidth
              inputWidth={["100%"]}
              key={field.label}
              required={true}              
              formLabel={field.label}
              type={field.type}
              name={field.name}
              placholder={field.placeholder}
            />
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Remember me"
              sx={{
                color: "#344054",
                fontSize: 7,
                fontWeight: 500,
              }}
            />
            <Typography
              sx={{
                color: "#513994",
                fontSize: 14,
                alignSelf: "center",
              }}
            >
              Forgot Password
            </Typography>
          </Box>
        </Stack>
        <BlueButton
          type="submit"
          buttonWidth={"100%"}
          // onClick={handleLogin}
          // submitting={submitting}
        >
          Sign in
        </BlueButton>
      </form>
    </Box>
  );
};
