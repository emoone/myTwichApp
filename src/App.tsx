import 'bulma/css/bulma.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';
import TheLayOut from './components/theLayout/TheLayout';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TheLayOut />
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
