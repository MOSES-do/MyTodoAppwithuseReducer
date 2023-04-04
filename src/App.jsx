import { ThemeProvider } from './ThemeContext'
import TodoItems from './components/TodoItems'
import AddItem from './components/AddItem'
import Search from './components/Search'



function App() {

  return (
    <div className="app">
      <ThemeProvider>
        <Search />
        <AddItem />
        <TodoItems />
      </ThemeProvider>
    </div>
  )

}

export default App
