import 'aos/dist/aos.css';
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import router from "./routes/router";
import { useEffect } from 'react';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);


  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
