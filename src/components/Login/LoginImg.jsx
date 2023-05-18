import React from "react";
import Bottom from "../../asstes/BottomLinePattern.png";
import Upper from "../../asstes/UpperLinePattern.png";
import { Box, MobileStepper } from "@mui/material";
import { bottom, upper } from "../../styles/LoginStyle";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const steps = [
  {
    label: "Matthew 17:20",
    description: `He said to them, “Because of your little faith. For truly, I say 
          to you, if you have faith like a grain of mustard seed, you will say to this 
          mountain, ‘Move from here to there,’ and it will move, and nothing will be 
          impossible for you.`,
  },
  {
    label: "2 Corinthians 5:7",
    description: "For we walk by faith, not by sight.",
  },
  {
    label: "Ephesians 2:8-9",
    description: `For by grace you have been saved through faith. And this is not 
          your own doing; it is the gift of God, not a result of works, so that no one 
          may boast.`,
  },
];

const LoginImg = () => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #191359 0%, #562FAB 100%);",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Bottom} alt="" style={bottom} />
      <img src={Upper} alt="" style={upper} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "transparent",
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "#fff",
          },
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {steps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 && (
                <div style={{ padding: "20px" }}>
                  <Box
                    sx={{
                      height: 255,
                      color: "white",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "30px",
                      lineHeight: "38px",
                      textAlign: "center",
                    }}
                  >
                    {steps[activeStep].description}
                  </Box>
                  <Box
                    sx={{
                      height: "24px",
                      color: "white",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                    }}
                  >
                    {steps[activeStep].label}
                  </Box>
                </div>
              )}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          sx={{
            background: "none",
          }}
          activeStep={activeStep}
        />
      </Box>
    </Box>
  );
};

export default LoginImg;
