import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  OutlinedInput,
  SelectChangeEvent,
} from "@mui/material";

const trees = ["cypress", "pine", "pondo", "bluegum", "mvule"];
const MUISelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [tree, setTree] = useState<string>("");
  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log({ value });
    setCountries(typeof value === "string" ? value.split(" ") : value);
  };
  const handleTreeChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    console.log({ value });
    setTree(value);
  };
  return (
    <>
      <Box width="250px" border={2}>
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="KEN">Kenya</MenuItem>
          <MenuItem value="UG">Uganda</MenuItem>
          <MenuItem value="TZ">Tanzania</MenuItem>
        </TextField>
      </Box>
      <Box width="250px" border={2}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          fullWidth
          value={tree}
          onChange={handleTreeChange}
          input={<OutlinedInput label="Name" />}
        >
          {trees.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default MUISelect;
