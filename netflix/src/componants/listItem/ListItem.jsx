import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { useState } from "react";
import demo from "../../vid/demo.mp4";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = demo;
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {console.log(isHovered)}

      <img
        src="https://cdn.shopify.com/s/files/1/0747/3829/products/mZ0039_1024x1024.jpeg?v=1571443953"
        alt=""
      />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true}  loop />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 30 mins</span>
              <span className="limit">+12</span>
              <span>2015</span>
            </div>
            <div className="desc">
              is a Japanese manga series written by Tsugumi Ohba and illustrated
              by Takeshi Obata. It was serialized in Shueisha's
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
