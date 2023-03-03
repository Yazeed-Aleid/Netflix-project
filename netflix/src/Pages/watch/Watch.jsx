import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import demo from '../../vid/demo.mp4'
const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video className="video" autoPlay controls progress src={demo}></video>
    </div>
  );
};

export default Watch;
