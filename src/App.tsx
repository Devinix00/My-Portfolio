import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { createStyledBreakpointsTheme } from "styled-breakpoints";
import useModalStore from "./stores/useModalStore/useModalStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const theme: DefaultTheme = createStyledBreakpointsTheme();

function App(): JSX.Element {
  const { isShowModal } = useModalStore();
  if (isShowModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
