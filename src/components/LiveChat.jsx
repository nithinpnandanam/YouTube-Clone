import { useDispatch, useSelector } from "react-redux";
import userIcon from "../assets/user.svg";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { $addLiveChat } from "../utils/slices/liveChatSlice";
import { generateRandomName } from "../utils/helper";
import { nameList } from "../utils/consatnts";
const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChatData = useSelector((store) => store.liveChat.liveChatData);
  console.log("To show", liveChatData);
  useEffect(() => {
    const apiPolling = setInterval(() => {
      console.log("Api Polling");
      dispatch(
        $addLiveChat({
          name: generateRandomName(nameList),
          comment: "msaduhbjkxopsxahjbhbjjsapoxsshbciunsxn",
        })
      );
    }, 1000);
    return () => {
      clearInterval(apiPolling);
    };
  }, []);
  return (
    <div className="flex flex-col border-red-500 border">
      {liveChatData.map((element, index) => {
        return (
          <div className="flex pb-4 pl-4">
            <img
              src={userIcon}
              alt="search icon"
              className="w-8 h-8 border-solid border-2  border-gray-600 rounded-full"
            />
            <ChatMessage details={element} key={index} number={index}/>
          </div>
        );
      })}
    </div>
  );
};

export default LiveChat;
