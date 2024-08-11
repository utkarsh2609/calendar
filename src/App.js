import './App.css';

import Month from './components/Month';

function App() {
  return (
    <div className="App">
      <h1 className="text-xl font-medium text-black">Text</h1>
      <Month month="January" days="30"/>
    </div>
  );
}

export default App;
