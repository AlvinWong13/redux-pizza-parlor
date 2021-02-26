import PizzaItem from '../PizzaItem/PizzaItem';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PizzaSelector() {
  const pizzaList = useSelector((store) => store.pizzaList);
  const history = useHistory();

  const goNext = () => {
    history.push('/userinfo');
  };

  return (
    <div>
      <div>
        {pizzaList.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      </div>
      <button onClick={() => goNext()}>Next</button>
    </div>
  );
}

export default PizzaSelector;
