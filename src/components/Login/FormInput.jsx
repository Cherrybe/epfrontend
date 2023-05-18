import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const Input = styled(InputBase)(({ theme }) => ({
  border: "1px solid #D0D5DD",
  width: theme.spacing(40),
  height: theme.spacing(5.5),
  padding: theme.spacing(10 / 8, 14 / 8),
  borderRadius: theme.spacing(1),
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05) inset",
  backgroundColor: "white",
}));

export const FormInput = (props) => {
  
  return (
    <FormControl
      error={props.error || Boolean(props.fieldError)}
      required={props.required}
    >
      {props.formLabel && (
        <FormLabel sx={{ color: "#344054", marginBottom: 6 / 8 }}>
          {props.formLabel}
        </FormLabel>
      )}
      <Input
        startAdornment={props.startAdornment}
        endAdornment={props.endAdornment}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        type={props.type}
        name={props.name}
        sx={{
          width: props.inputWidth,
          ...props.sx,
          border: props.error || props.fieldError ? "2px solid red" : null,
        }}
      />
      <FormHelperText error={Boolean(props.fieldError) || Boolean(props.error)}>
        {props.fieldError}
      </FormHelperText>
    </FormControl>
  );
};
