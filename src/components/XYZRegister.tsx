import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { useState } from 'react';


const queryClient = new QueryClient();

function XYZRegister() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <TanstackServiceCall/>
            </QueryClientProvider>
        </div>
    )
}


function TanstackServiceCall() {
    const [count, setCount] = useState(0)

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.github.com/repos/TanStack/query',
      )
      return await response.json()
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>

      <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default XYZRegister