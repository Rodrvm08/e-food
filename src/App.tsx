
import { GlobalStyles } from './globalStyle'
import { RouterProvider } from 'react-router-dom'
import router from './pages/routes'

function App() {
  return(
    <>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
