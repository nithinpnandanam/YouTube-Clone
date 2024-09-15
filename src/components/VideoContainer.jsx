import { useEffect, useState } from "react"
import { allVideos } from "../utils/consatnts"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [allVideoData,setAllVideoData] = useState(null)
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
    
    return allVideoData && (
        <div className="flex flex-wrap gap-x-12">
          {
            allVideoData.map((element,index)=>{
              return (
                  <Link to={`watch?v=${element.id}`}> <VideoCard info={element} key={index} /></Link>
              )
            }
          )
          }
        </div>
    )
}
export default VideoContainer