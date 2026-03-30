import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './store/auth.jsx'
  import { ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
 <ToastContainer
position="top-right"
autoClose={1100}
hideProgressBar={false}
newestOnTop
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

style ={{ transition :"Bounce"}}/>
  </StrictMode>
  </AuthProvider>
)




