import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Button label="Test UI" />
      <Icon name="cross" size={24} />
      <Input label="User Name" size="small" />
      <Input label="User Name" />
      <Input label="User Name" size="large" />
    </div>
  );
}

export default App;
