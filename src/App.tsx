import 'bulma/css/bulma.css';
import './styles/bulmaswatch.css';
import 'bulma-pageloader/dist/css/bulma-pageloader.min.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
