ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

function App() {
  const [counters, setCounters] = React.useState([]);
  const addCoutner = () => {
    const newCounter = [...counters];
    newCounter.push({ id: counters.length + 1, number: 0 });
    setCounters(newCounter);
  };
  const deleteCounter = (id) => {
    let idx = counters.findIndex((el) => el.id === id);
    const newCounter = [...counters];
    newCounter.splice(newCounter[idx], 1);
    setCounters(newCounter);
  };
  const updateCounter = (id, n) => {
    // console.log('id:',id)
    let idx = counters.findIndex((el) => el.id === id);
    // console.log('counters array no:', idx)
    const newCounters = [...counters];
    if (newCounters[idx].number + n < 0) {
      alert("Already Mininum");
      return;
    }
    newCounters[idx].number += n;
    setCounters(newCounters);
  };
  const sum = counters.reduce((prev, curr) => {
    return prev + curr.number;
  }, 0);

  return (
    <div className="app">
      <h1 className="show-sum">Sum = {sum}</h1>
      <button className="btn-add" onClick={addCoutner}>
        Add Counter
      </button>
      {counters.map((el) => (
        <Counter
          key={el.id}
          item={el}
          updateCounter={updateCounter}
          deleteCounter={deleteCounter}
        />
      ))}
    </div>
  );
}

function Counter(props) {
  const { item, updateCounter, deleteCounter } = props;
  return (
    <div className="counter">
      <button
        onClick={() => updateCounter(item.id, -1)}
        className="btn btn-dec"
      >
        -
      </button>
      <h3 className="number">{item.number}</h3>
      <button onClick={() => updateCounter(item.id, 1)} className="btn btn-inc">
        +
      </button>
      <button
        onClick={() => updateCounter(item.id, -item.number)}
        className="btn btn-clr"
      >
        C
      </button>
      <button className="btn btn-close" onClick={() => deleteCounter(item.id)}>
        X
      </button>
    </div>
  );
}
