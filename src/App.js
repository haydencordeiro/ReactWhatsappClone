import logo from './logo.svg';
import './App.css';
import LeftNav from './compnents/LeftNav';
import RightNav from './compnents/RightNav';
import AllChats from './compnents/AllChats';
import MessageBar from './compnents/MessageBar';

function App() {
  return (
    <div className="container">
     <LeftNav></LeftNav>
     <RightNav></RightNav>
     <AllChats></AllChats>
     <MessageBar></MessageBar>
    </div>
  );
}

export default App;
