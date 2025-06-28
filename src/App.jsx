
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import router from "./routes/router";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
