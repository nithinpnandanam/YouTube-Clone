import { useEffect, useState } from "react"
import { allVideos } from "../utils/consatnts"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DummyAllVideo from "./DummyAllVideo";
const VideoContainer = () => {
  const [allVideoData,setAllVideoData] = useState(null)
  const global = useSelector((store) => store.global);
    useEffect(() => {
        const fetchAllVideos= async () => {
          try {
            const data = await fetch(allVideos);
            const json = await data.json();
            setAllVideoData(json.items)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchAllVideos();
      }, []);
    if(allVideoData===null){
      return <DummyAllVideo/>
    }
    return allVideoData && (
        <div className={`flex flex-wrap ${global.showSidebar?"gap-x-12":"gap-x-4 p-4"}`}>
          {
            allVideoData.map((element,index)=>{
              return (
                  <Link to={`watch?v=${element.id}`}  key={index} > <VideoCard info={element} /></Link>
              )
            }
          )
          }
        </div>
    )
}
export default VideoContainer