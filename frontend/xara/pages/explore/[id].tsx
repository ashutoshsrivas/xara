"use client";
import { Router, useRouter } from "next/router";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Dashboardcard from "../components/Dashboardcard";
import Link from "next/link";
const detail = () => {
  const {
    user,
  }: {
    user?: object | any;
  } = useAuthContext();
  const router = useRouter();

  const [title, setTitle] = useState("Butter Chicken");
  const [description, setDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  );
  const [review, setReview] = useState("4.5");
  const [reviewCount, setReviewCount] = useState(126);
  const [time, setTime] = useState(2);
  const [image, setImage] = useState("https://picsum.photos/400/300");
  const [ingredients, setIngredients] = useState([]);
  const [tags, setTags] = useState([
    "vegetarian",
    "Multi Stage Cooking",
    "One Pot Cooking",
  ]);

  useEffect(() => {
    if (!user) router.push("../");
  }, [user]);
  const { id } = router.query;

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
      <div className="text-center">
        <Link href={"../"} style={{ color: "black", textDecoration: "none" }}>
          <ArrowBackIcon></ArrowBackIcon> Go back
        </Link>

        <div className="container m-0-auto my-4">
          {/* <img src={image} alt="" width={"20%"} /> */}
          <div style={{"backgroundImage":`url(${image})`}} className="detail-image-box"></div>
        </div>
        <div className="container m-0-auto my-4 row text-center" style={{"justifyContent":"center"}}>
          {tags.map((tag) => {
            return <span className="detail-tag col-md-2 col-sm-1">{tag}</span>;
          })}
        </div>
        <div className="container m-0-auto my-4 recipe-detail">
            <h2 className="details-title">{title}<span><StarIcon style={{ color: "#FFD700" }} />{review}</span></h2>
            <p className="details-time">Time to Cook <span><AccessTimeIcon></AccessTimeIcon> {time} hours</span></p>
            <p className="recipe-detail-desc">{description}</p>
       </div>
        
      </div>

      
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      <div className="cook-now-btn-full">
        Cook Now
      </div>
    </div>
  );
};

export default detail;
