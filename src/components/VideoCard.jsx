import { useDispatch } from "react-redux";
import { $closeSidebar } from "../utils/slices/globalSlice";
import { formatViewCount } from "../utils/helper";

const VideoCard = (props) => {
  const {snippet,statistics} = props.info
  const {url}= snippet.thumbnails.high
  const dispatch = useDispatch()
  const closeSidebar = () => {
    dispatch($closeSidebar())
  }
  return (
    <div className="flex-col" onClick={closeSidebar}>
      <div className="w-[345px]">
        <img src={url} className='rounded-lg ' alt="Thumbnail" />
      </div>
      <p>{snippet.channelTitle}</p>
      <div className="flex">
        <p>{formatViewCount(statistics.viewCount)} views</p>
        {/* <p>{snippet.publishedAt}</p> */}
      </div>
    </div>
  );
};

export default VideoCard;
