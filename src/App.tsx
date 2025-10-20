import { Provider } from 'react-redux'
import { GlobalStyles } from './globalStyle'
import { RouterProvider } from 'react-router-dom'
import router from './pages/routes'
import { store } from './components/store'

function App() {
  return(
    <Provider store={store}>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </Provider>
    
  )
}

export default App
