import React, { useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function InputForm({ type, name }) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <FormControl sx={{ width: "100%", marginTop: 3 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">{name}</InputLabel>
      <Input
        id="standard-adornment-password"
        type={type === "Password" ? (showPassword ? "Password" : "text") : type}
        name={name}
        // value={values.password}
        // onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            {type === "Password" && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(showPassword ? false : true)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
