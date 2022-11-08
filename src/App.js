import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Routes';

import './App.css';


function App() {
  return (
    <div className="App bg-cyan-50">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;

// npm i lottie - react
