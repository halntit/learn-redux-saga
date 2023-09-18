import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './redux/todosSlice';
import { increaseCount, decreaseCount } from './redux/counterSlice';
import { fetchTodo } from './redux/actions';

const incCount = 2;
const decCount = 1;

function App(props) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const count = useSelector(state => state.count);

  const handleIncrease = () => {
    dispatch(increaseCount(incCount));
  }

  const handleDescrease = () => {
    dispatch(decreaseCount(decCount));
  }

  const handleAdd = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    dispatch(fetchTodo(number));
  }

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  }

  return (
    <div className="App">
      <h1>Redux turtorial</h1>
      <h4>Count App</h4>
      <h5>Count is {count.count}</h5>
      <button onClick={handleIncrease}>Increase by {incCount}</button>
      <button onClick={handleDescrease}>Descrease by {decCount}</button>

      <hr />

      <h4>ToDo App</h4>
      <div>
        <button onClick={handleAdd}>Add a task</button>
        { todos.isLoading && <span>...</span> }
      </div>
      <br />
      <ul align="left" style={{width:'240px', margin:'auto', border:'1px solid black', padding:'20px'}}>
        {todos.todos.map((todo, i) => 
          <li key={i}>
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
