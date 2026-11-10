import { createBrowserRouter, RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routes } from "./app.routes"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
const router = createBrowserRouter(routes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App
