import './App.css';
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudeBoard";

function App(){
  return (
    <>
    <LudoBoard/> 
      <p>State in React</p>
      <Counter/>
      <LikeButton/>
    </>
  );
}

export default App;
