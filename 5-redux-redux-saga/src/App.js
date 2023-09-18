import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux'
import Types from "./redux/types";

const incCount = 2;
const decCount = 1;

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const count = useSelector(state => state.count);

  const handleIncrease = () => {
    dispatch({
      type: Types.INCREASE_COUNT_SAGA,
      payload: incCount
    });
  }

  const handleDescrease = () => {
    dispatch({
      type: Types.DECREASE_COUNT_SAGA,
      payload: decCount
    });
  }

  const handleAdd = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    // dispatch(fetchTodo(number));
    dispatch({
      type: Types.ADD_TODO_SAGA,
      payload: number
    });
  }

  const handleDelete = (index) => {
    dispatch({
      type: Types.DELETE_TODO_SAGA,
      payload: index
    });
  }

  return (
    <div className="App">
      <h1>Redux turtorial | Redux Saga</h1>
      <h4>Count App</h4>
      <h5>Count is {count.count}</h5>
      <button onClick={handleIncrease}>Increase by {incCount}</button>
      &nbsp;|&nbsp;
      <button onClick={handleDescrease}>Descrease by {decCount}</button>

      <hr />

      <h4>ToDo App</h4>
      <div>
        <button disabled={todos.isLoading} onClick={handleAdd}>
          { todos.isLoading === true && <span>Adding ...</span> }
          { todos.isLoading === false && <span>Add a task</span> }
        </button>
      </div>
      <br />
      <ul align="left" style={{width:'600px', margin:'auto', border:'1px solid black', padding:'20px', listStyle:'none'}}>
        {todos.todos.map((todo, i) => 
          <li style={{marginBottom:'5px', paddingBottom:'5px', borderBottom:'1px dashed #ccc'}} key={i}>
            <button onClick={() => handleDelete(i)}>x</button>
            &nbsp;
            {todo}
          </li>
        )}
      </ul>
    </div>
  );
}

export default connect()(App);
