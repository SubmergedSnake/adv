import "./App.css";
import DefectList from "./components/DefectList";
import { Header } from "./components/Header";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <DefectList />
      </>
    </QueryClientProvider>
  );
}

export default App;
