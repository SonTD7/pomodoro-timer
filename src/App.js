import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import icon from "@atlaskit/icon";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <p>To do app</p>
          <Textfield
            className="border border-info"
            name="add-todo"
            placeholder="Add To Do Lists"
            aria-label="default text field"
            elemAfterInput={<Button inDisabled={true} appearance={"primary"}> Add</Button>}
          />
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
