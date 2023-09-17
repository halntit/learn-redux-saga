import './App.css';
import { connect } from 'react-redux'
import { decreaseCount, increaseCount } from './redux/actions';

const mapStateToProps = state => ({
  count: state.count,
});

function App(props) {
  const handleIncrease = () => {
    props.dispatch(increaseCount());
  }

  const handleDescrease = () => {
    props.dispatch(decreaseCount());
  }

  return (
    <div className="App">
      <h1>Redux turtorial</h1>
      <h4>{props.count}</h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDescrease}>Descrease</button>
    </div>
  );
}

export default connect(mapStateToProps)(App);
