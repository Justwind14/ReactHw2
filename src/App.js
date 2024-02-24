import logo from './logo.svg';
import './App.css';
import CommentsList from "./components/CommentsList";


function App() {


  const addComment = () => {

  }
  return (
    <div className="App">
      <h1>Комментарии пользователей: </h1>
      <CommentsList />
    </div>
  );
}

export default App;
