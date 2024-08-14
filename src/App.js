import './App.css';

import Header from './components/Header';
import Month from './components/Month';

function App() {
  return (
    <div className="App">
      <Header />
      <Month month="January" days="30"/>
    </div>
  );
}

export default App;
