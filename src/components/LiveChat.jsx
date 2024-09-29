import { useDispatch, useSelector } from "react-redux";
import userIcon from "../assets/user.svg";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { $addLiveChat } from "../utils/slices/liveChatSlice";
import { generateRandomName,generateRandomMessage,getRandomNumber} from "../utils/helper";
import { nameList } from "../utils/consatnts";
const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChatData = useSelector((store) => store.liveChat.liveChatData);
  useEffect(() => {
    const apiPolling = setInterval(() => {
      dispatch(
        $addLiveChat({
          name: generateRandomName(nameList),
          comment: generateRandomMessage(getRandomNumber()),
        })
      );
    }, 1000);
    return () => {
      clearInterval(apiPolling);
    };
  }, []);
  return (
    <div className="flex flex-col-reverse h-full overflow-y-auto">
      <div className="flex flex-col">
      {liveChatData.map((element, index) => {
        return (
          <div className="flex pb-4 items-center" key={index}> 
            <img
              src={userIcon}
              alt="search icon"
              className="w-8 h-8 border-solid border-2  border-gray-600 rounded-full"
            />
            <ChatMessage details={element} key={index} />
          </div>
        );
      })}
      </div>
      
    </div>
  );
};

export default LiveChat;
