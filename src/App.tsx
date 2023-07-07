import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { trpc } from "./lib/trpc";

function App() {
  const [count, setCount] = useState(0);

  const { data } = trpc.example.greeting.useQuery();
  const {
    mutate,
    data: message,
    isLoading,
  } = trpc.example.sayHello.useMutation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="query-container">
        <p>From tRPC:</p>
        {data ? <pre>{data}</pre> : <p>Loading...</p>}
      </div>
      <div className="query-container">
        <p>Mutations? No problem.</p>
        {isLoading ? (
          <div>Loading...</div>
        ) : message ? (
          <pre>{message.greeting}</pre>
        ) : (
          <pre>Click "Mutate" to Load Message</pre>
        )}
        <button onClick={() => mutate({ name: "Human" })}>Mutate</button>
      </div>
    </>
  );
}

export default App;
