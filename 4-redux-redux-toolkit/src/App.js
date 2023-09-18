import './App.css';
import { connect, useDispatch } from 'react-redux'
import { addTodoAsync, deleteTodo } from './redux/todosSlice';
import { increaseCount, decreaseCount } from './redux/counterSlice';

const mapStateToProps = state => ({
  count: state.count.count,
  todos: state.todos.todos,
});

const incCount = 2;
const decCount = 1;

function App(props) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount(incCount));
  }

  const handleDescrease = () => {
    dispatch(decreaseCount(decCount));
  }

  const handleAdd = () => {
    dispatch(addTodoAsync());
  }

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  }

  return (
    <div className="App">
      <h1>Redux turtorial</h1>
      <h4>Count App</h4>
      <h5>Count is {props.count}</h5>
      <button onClick={handleIncrease}>Increase by {incCount}</button>
      <button onClick={handleDescrease}>Descrease by {decCount}</button>

      <hr />

      <h4>ToDo App</h4>
      <div>
        <button onClick={handleAdd}>Add a task</button>
      </div>
      <br />
      <ul align="left" style={{width:'240px', margin:'auto', border:'1px solid black', padding:'20px'}}>
        {props.todos.map((todo, i) => 
          <li key={i}>
            {todo}
            &nbsp;
            <button onClick={() => handleDelete(i)}>x</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps)(App);
