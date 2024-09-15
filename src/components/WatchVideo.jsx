import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <iframe
        width="1200"
        height="600"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WatchVideo;
