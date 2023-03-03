import "./home.scss";
import Navbar from "../../componants/navbar/Navbar";
import Featured from "../../componants/featured/Featured ";
import List from "../../componants/list/List";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      {/* <img src="https://besthqwallpapers.com/Uploads/24-11-2020/146685/thumb2-l-death-note-portrait-anime-characters-japanese-manga.jpg" alt="" width='100%' /> */}
      <Featured type="movie" />
      <List/>
      <List/>
      <List/>
    </div>
  );
}
