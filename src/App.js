import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import EditInfo from './components/UserData/EditInfo';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home> 
    },
    {
      path: '/edit/:id',
      element: <EditInfo></EditInfo>,
      loader: ({params}) => fetch(`https://task-server-beta.vercel.app/users/${params.id}`)
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
