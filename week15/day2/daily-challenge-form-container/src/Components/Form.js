import { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      firstName: "",
      lastName: "",
      gender: "",
      nutsFree: "",
      LactoseFree: "",
      vegan: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [target.name]: value }, () => {
      this.props.getFormData(this.state);
    });
  };

  render() {
    return (
      <div className="mt-4">
        <h1>Form</h1>
        <form method="GET" action="/">
          <div className="d-flex flex-column">
            <TextField
              onChange={this.handleChange}
              name="firstName"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              style={{ width: "350px", marginTop: "10px" }}
            />
            <TextField
              onChange={this.handleChange}
              name="lastName"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              style={{ width: "350px", marginTop: "10px" }}
            />
          </div>
          <FormControl>
            <FormLabel className="mt-4" id="demo-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              className="m-auto"
              onChange={this.handleChange}
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <h6 className="mb-2 text-center m-auto">
            Please select your destination
          </h6>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
            <Select
              name="destination"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.destination}
              label="Destination"
              onChange={this.handleChange}
            >
              <MenuItem value={"Japan"}>Japan</MenuItem>
              <MenuItem value={"England"}>England</MenuItem>
              <MenuItem value={"Turkey"}>Turkey</MenuItem>
              <MenuItem value={"Germany"}>Germany</MenuItem>
              <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
              <MenuItem value={"Italy"}>Italy</MenuItem>
            </Select>
          </FormControl>
          <h5 className="mt-4">Dietery restrictions</h5>
          <FormControlLabel
            className="m-auto"
            onChange={this.handleChange}
            name="nutsFree"
            control={<Checkbox />}
            label="Nuts free"
          />
          <FormControlLabel
            className="m-auto"
            onChange={this.handleChange}
            name="LactoseFree"
            control={<Checkbox />}
            label="Lactose free"
          />
          <FormControlLabel
            className="m-auto"
            onChange={this.handleChange}
            name="vegan"
            control={<Checkbox />}
            label="Vegan"
          />
          <Button
            type="submit"
            variant="contained"
            className="d-block m-auto mt-3"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
