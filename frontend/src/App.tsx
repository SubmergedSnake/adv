import "./App.css";
import Container from "./components/Container";
import { Header } from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <Container />
      </>
    </QueryClientProvider>
  );
}

export default App;
