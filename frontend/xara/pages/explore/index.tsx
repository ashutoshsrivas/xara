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
import { Dashboard, Email, Search } from "@mui/icons-material";
import Dashboardcard from "../components/Dashboardcard";
import axios from "axios";
import { get } from "http";
const index = () => {
  const {
    user,
    apiurl,
  }: {
    user?: object | any;
    apiurl?: string;
  } = useAuthContext();
  const [email, setEmail] = user != null ? useState(user.email) : useState("");
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

  const [loading, setLoading] = useState(true);
  const [userdata, setUserdata] = useState({recipelist:[],fav:[]  });

  
  useEffect(() => {
    const getDetails = ()=>{
      axios.post(`${apiurl}user/getdetails`, {"email":email}).then((res) => {
        console.log("num");
        setUserdata(res.data);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    }
    // return () => {
    //   getDetails();
    // }
    if(router.isReady){
      getDetails();
    }
  }, [router.isReady])
  

  if (loading) {
    return (<div>Loading</div>);
  } else {
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
                <InputLabel id="dashboard-cooking-process-select-label">
                  Cooking Process
                </InputLabel>
                <Select
                  labelId="dashboard-cooking-process-select-label"
                  id="dashboard-cooking-process-select"
                  value={cp}
                  label="Cooking Process"
                  onChange={handleCPChange}
                >
                  <MenuItem value={"Single Stage Cooking"}>
                    Single Stage Cooking
                  </MenuItem>
                  <MenuItem value={"Multi Stage Cooking"}>
                    Multi Stage Cooking
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-sm-4 col-md-4 p-4">
              <FormControl fullWidth>
                <InputLabel id="dashboard-category-select-label">
                  Category
                </InputLabel>
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
                <InputLabel id="dashboard-types-select-label">
                  Types of Dishes
                </InputLabel>
                <Select
                  labelId="dashboard-types-select-label"
                  id="dashboard-types-select"
                  value={td}
                  label="Types of Dishes"
                  onChange={handleTDChange}
                >
                  <MenuItem value={"Vegetarian"}>Vegetarian</MenuItem>
                  <MenuItem value={"Egg + Vegetarian"}>
                    Egg + Vegetarian
                  </MenuItem>
                  <MenuItem value={"Non Vegetarian"}>Non Vegetarian</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="container margin-0-auto">
            <div className="row">
              {userdata.recipelist.map((item: any) => {
                return (
                  <Dashboardcard
                    id={item.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default index;
