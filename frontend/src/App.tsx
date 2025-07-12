import "./App.css";
import Container from "./components/Container";
import DefectList from "./components/DefectList";
import { Header } from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryControls from "./components/QueryControls";

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
