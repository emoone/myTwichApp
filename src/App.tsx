import 'bulma/css/bulma.css';
import './styles/bulmaswatch.css';
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css';
import './styles/main.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Router from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className="App">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
