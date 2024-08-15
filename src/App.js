import './App.css';

import Header from './components/Header';
import SideBar from './components/Sidebar';
import Month from './components/Month';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <div className='w-2/12'>
          <SideBar />
        </div>
        <div className='w-10/12'>
          <Month month="January" days="30" />
        </div>
      </div>
    </div>
  );
}

export default App;
