import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const publicRoute = [
  {path:"/",component:Home},
  {path:"*",component:PageNotFound},
]

const privateRoute = []

export {publicRoute , privateRoute}