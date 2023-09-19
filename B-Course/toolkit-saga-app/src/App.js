import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './catState';
import './App.css';

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Cat breeds</h1>
      <p>A cat library</p>
      <hr />
      <div className='Gallery'>
        {cats.map((cat) => (
          <div className="row" key={cat.id}>
            <div className='column column-left'>
              <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} alt={cat.name} />
            </div>
            <div className='column column-right'>
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
