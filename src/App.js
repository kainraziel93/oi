import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home/home.jsx'
function App() {

  
  const layout=()=>{
    return (<div className='main'>
      
    </div>)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/user",
      element: (<div>homeeee</div>)
    },
   
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
