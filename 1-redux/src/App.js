import './App.css';
import { connect } from 'react-redux'
import { addTodo, decreaseCount, delTodo, increaseCount } from './redux/actions';
import { useState } from 'react';

const mapStateToProps = state => ({
  count: state.count.count,
  todos: state.todos.todos,
});

const incCount = 2;
const decCount = 1;

function App(props) {
  const [name, setName] = useState('');

  const handleIncrease = () => {
    props.dispatch(increaseCount(incCount));
  }

  const handleDescrease = () => {
    props.dispatch(decreaseCount(decCount));
  }

  const handleOnChange = (e) => {
    setName(e.target.value.trim());
  }

  const handleAdd = () => {
    props.dispatch(addTodo(name));
    setName('');
  }

  const handleDelete = (index) => {
    props.dispatch(delTodo(index));
  }

  return (
    <div className="App">
      <h1>Redux turtorial | Redux</h1>
      <h4>Count App</h4>
      <h5>Count is {props.count}</h5>
      <button onClick={handleIncrease}>Increase by {incCount}</button>
      <button onClick={handleDescrease}>Descrease by {decCount}</button>

      <hr />

      <h4>ToDo App</h4>
      <div>
        <input value={name} onChange={handleOnChange} />
        <button onClick={handleAdd}>Add</button>
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
