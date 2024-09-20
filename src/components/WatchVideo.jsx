import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useDispatch, useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import {useRef } from "react";
import { $addLiveChat } from "../utils/slices/liveChatSlice";
const WatchVideo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showSidebar = useSelector((store) => store.global.showSidebar);
  const serachValue = useRef("");
  const dispatch = useDispatch()
  const sendLiveChat = () => {
    dispatch($addLiveChat({
      name: "Joey Tribbiani",
      comment: serachValue?.current?.value
    }))
    serachValue.current.value = "";
  }
  return (
    <div className="flex ">
      <div
        className={`flex w-[70%] flex-col  ${
          showSidebar === false ? "pl-[2rem] box-border" : ""
        }`}
      >
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
      <div className="h-[600px] w-[30%]  flex flex-col justify-between px-4">
        <p className="py-4 text-center text-xl">Live Chat</p>
        <LiveChat />
        <div className="flex ">
        <input type="text" className="text-black mr-4 w-[77%]" ref={serachValue} />
        <button className="rounded-lg bg-green-500 px-4 py-2" onClick={sendLiveChat}> Send </button>
        </div>

      </div>
    </div>
  );
};
export default WatchVideo;
