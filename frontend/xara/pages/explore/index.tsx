"use client";
import { Router, useRouter } from "next/router";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useEffect, useState } from "react";
import Mydrawer from "../components/Mydrawer";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Dashboard, Search } from "@mui/icons-material";
import Dashboardcard from "../components/Dashboardcard";
const index = () => {
  const {
    user,
  }: {
    user?: object | any;
  } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("../");
  }, [user]);

  const [cp, setCp] = useState("");

  const handleCPChange = (event: SelectChangeEvent) => {
    setCp(event.target.value as string);
  };
  
  const [cate, setCate] = useState("");

  const handleCateChange = (event: SelectChangeEvent) => {
    setCate(event.target.value as string);
  };
  
  const [td, setTD] = useState("");

  const handleTDChange = (event: SelectChangeEvent) => {
    setTD(event.target.value as string);
  };

  return (
    <div>
      <Mydrawer activetab="explore"></Mydrawer>
      <div className="container m-0-auto">
        <FormControl variant="outlined" className="container-fluid">
          <OutlinedInput
            id="input-with-icon-adornment"
            placeholder="Search with dishname or dish id"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="container row m-0-auto">
          <div className="col-sm-4 col-md-4 p-4">
            <FormControl fullWidth>
              <InputLabel id="dashboard-cooking-process-select-label">Cooking Process</InputLabel>
              <Select
                labelId="dashboard-cooking-process-select-label"
                id="dashboard-cooking-process-select"
                value={cp}
                label="Cooking Process"
                onChange={handleCPChange}
              >
                <MenuItem value={"Single Stage Cooking"}>Single Stage Cooking</MenuItem>
                <MenuItem value={"Multi Stage Cooking"}>Multi Stage Cooking</MenuItem>
              </Select>
            </FormControl>
          </div>
          
          <div className="col-sm-4 col-md-4 p-4">
            <FormControl fullWidth>
              <InputLabel id="dashboard-category-select-label">Category</InputLabel>
              <Select
                labelId="dashboard-category-select-label"
                id="dashboard-category-select"
                value={cate}
                label="Category"
                onChange={handleCateChange}
              >
                <MenuItem value={"Rice"}>Rice</MenuItem>
                <MenuItem value={"One Pot Meal"}>One Pot Meal</MenuItem>
                <MenuItem value={"Stir Fry"}>Stir Fry</MenuItem>
              </Select>
            </FormControl>
          </div>
          
          <div className="col-sm-4 col-md-4 p-4">
            <FormControl fullWidth>
              <InputLabel id="dashboard-types-select-label">Types of Dishes</InputLabel>
              <Select
                labelId="dashboard-types-select-label"
                id="dashboard-types-select"
                value={td}
                label="Types of Dishes"
                onChange={handleTDChange}
              >
                <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
                <MenuItem value={"Egg + Vegetarian"}>Egg + Vegetarian</MenuItem>
                <MenuItem value={"Non Vegetarian"}>Non Vegetarian</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="container margin-0-auto">
          <div className="row">
            <Dashboardcard id={"1"} />
            <Dashboardcard id={"2"} />
            <Dashboardcard id={"3"} />
            <Dashboardcard id={"4"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
