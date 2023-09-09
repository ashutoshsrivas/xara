import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useAuthContext } from "../../lib/context/AuthContext";
import { useRouter } from "next/router";

const Dashboardcard = ({ id }: { id: String }) => {
  const [title, setTitle] = useState("Butter Chicken");
  const [description, setDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  );
  const [review, setReview] = useState("4.5");
  const [reviewCount, setReviewCount] = useState(126);
  const [time, setTime] = useState(2);
  const [image, setImage] = useState("https://picsum.photos/400/300");
  
  const router = useRouter();
   const handleViewClick = () => {
      router.push(`/explore/${id}`);
    };

  return (
    <div className="col-sm-4 py-2 px-4">
      <div className="dashboard-card">
        <div
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
          }}
          className="card-image"
        >
          <div className="card-image-area"></div>
          <div className="container-fluid card-image-action">
            <span className="card-rating-box">
              <WatchLaterIcon style={{ paddingLeft: "0.2rem" }} />
              <p style={{ display: "inline", paddingLeft: "0.2rem" }}>
                {time} hours
              </p>
            </span>
            <FavoriteBorderIcon style={{ color: "#F54748" }} />
          </div>
        </div>
        <div className="p-2 card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="container row">
            <div className="col-sm-6">
              <StarIcon style={{ color: "#FFD700" }} />
              <b>{review}</b>
              <span> ( {reviewCount} ) </span>
            </div>
            <div className="col-sm-6" style={{ textAlign: "end" }}>
              <button className="btn btn-main" onClick={handleViewClick}>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardcard;
