import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Body from "../components/Body";
import WatchVideo from "../components/WatchVideo";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body/>,
        errorElement: <Error />,
      },
      {
        path: "/watch",
        element: <WatchVideo/>,
        errorElement: <Error />,
      },
    ]
  },
]);

export default appRouter