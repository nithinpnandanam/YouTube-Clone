import VideoContainer from "./VideoContainer"


const Body = () => {
  const categories = [
    "All",
    "News",
    "Music",
    "Travel",
    "Software Engineering",
    "Gadjects",
    "Recently Uploaded",
    "Romantic Comedies",
    "Watched",
  ];
  return (
    <div>
        <div className="border-2 border-solid border-violet-700 p-2  ">
        {categories.map((element, index) => {
          return (
            <button
              key={index}
              className="p-2 rounded-lg bg-[#545454] opacity-80 mr-6"
            >
              {element}
            </button>
          );
        })}
      </div>
        <VideoContainer/>
    </div>
  )
}

export default Body
