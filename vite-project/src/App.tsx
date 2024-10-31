import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
function App() {
  const [count, setCount] = useState(0)

  const [data, setData] = useState<Post[]>([])

   useEffect(() => {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])
   
  return (
    <>

      
      <div>
          {data.map((item:any) => (
            <div key={item.id}>{item.title}12321321</div>
          ))}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React dsadsad idnh cao 

      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR dsa
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
