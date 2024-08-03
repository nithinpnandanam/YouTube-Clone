
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Body from "../components/Body";
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
    ]
  },
]);

export default appRouter