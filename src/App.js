import React, { useCallback } from "react";
import "./App.css";

function App() {
  const [state, setState] = React.useState({
    numberRst: "",
    numValue: "",
    width: 0,
    height: 0,
    area: 0,
  });

  const converToSeries = useCallback((times) => {
    return Array(Number(times))
      .fill(0)
      .map((a, index) => index + 1)
      .toString();
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleGenerateSeries = () => {
    setState({
      ...state,
      numberRst: converToSeries(Number(state?.numValue) || 0),
    });
  };

  const calculateArea = useCallback(
    () => 0.5 * state.width * state.height,
    [state.width, state.height]
  );

  const handleArea = () => {
    setState({ ...state, area: calculateArea() });
  };

  return (
    <div className="App">
      <div>
        <label>Enter Number</label>
        <input
          type="number"
          placeholder="number"
          name="numValue"
          value={state.numValue}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleGenerateSeries}>Generate Series</button>
      </div>
      <div>
        <label>Number Result</label>
        <input
          disabled
          type="text"
          placeholder="number"
          value={state.numberRst}
          name="numberRst"
        />
      </div>
      <div>
        <label>Width</label>
        <input
          type="number"
          placeholder="width of triangle"
          value={state.width}
          onChange={handleChange}
          name="width"
        />
      </div>
      <div>
        <label>Number Result</label>
        <input
          type="number"
          placeholder="height of triangle"
          value={state.height}
          onChange={handleChange}
          name="height"
        />
      </div>
      <div>
        <button onClick={handleArea}>Calculate area</button>
      </div>
      <div>
        <label>Number Result</label>
        <input
          disabled
          type="text"
          placeholder="calculated Area"
          value={state.area}
          name="area"
        />
      </div>
    </div>
  );
}

export default App;
