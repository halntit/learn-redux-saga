import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);

  return (
    <div className="App" style={{ textAlign: 'left', margin:'20px' }}>
      <div>Users:</div>
      <ul style={{ textAlign: 'left' }}>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => dispatch(getUserFetch())}>Load users</button>
      </div>
    </div>
  );
}

export default App;
