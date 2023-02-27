import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { configrationStore } from "./store/configStore";
import TodosList from "./Components/Todos/Todos";
import AddTodo from "./Components/AddTodo/AddTodo";

const store = configrationStore();

store.subscribe(()=>{
  // console.log('rrrr',store.getState())
})

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<AddTodo />} />
          <Route path="/create" element={<AddTodo />} />
          <Route path="/" element={<TodosList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
