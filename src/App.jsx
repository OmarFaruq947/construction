import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './route/route'

function App() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
  <RouterProvider
  router={router}/>

    </>
  )
}

export default App
