import "./featured .scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Featured = ({ type }) => {
  return (
    <div className="featured">
        
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Crime ">Crime </option>
            <option value="Psychological ">Psychological </option>
          </select>
        </div>
      )}
      <img
        src="https://pm1.narvii.com/6814/f1134631b02ced85272fa933ebe213c01efada18v2_hq.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2OTMwMTMxNDAxNDUxNDA4/5-reasons-l-knew-light-was-kira-in-death-note.jpg"
          alt=""
        />
        <span className="desc">
          Death Note is a Japanese manga series written by Tsugumi Ohba and
          illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen
          manga magazine Weekly Shōnen Jump from December 2003 to May 2006, with
          its 108 chapters collected in 12 tankōbon
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
