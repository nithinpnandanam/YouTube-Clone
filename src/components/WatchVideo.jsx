import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import { useEffect, useRef } from "react";

const WatchVideo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showSidebar = useSelector((store)=>store.global.showSidebar)
  const scrollRef = useRef(null);
  const liveChatData = useSelector((store) => store.liveChat.liveChatData);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [liveChatData]);
  return (
    <div className="flex">
      <div className={`flex w-[70%] flex-col  ${showSidebar===false?"pl-[2rem] box-border":""}`}>
        <iframe
          height="600"
          className="w-full rounded-2xl"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      <div>
        <CommentContainer />
      </div>
    </div>
    <div className="h-[600px] w-[30%] border overflow-y-auto flex  flex-col-reverse" >
      <p className="p-4 text-center text-xl">Live Chat</p>
      <LiveChat/>
    </div>
    </div>
    
  );
};
export default WatchVideo;
