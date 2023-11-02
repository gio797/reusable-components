import Badge from "./components/badge/Badge";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="app">
      <Button size="lg" variant="warning">
        hello
      </Button>
      <Badge color="red" variant="pill">
        Badge
      </Badge>
      <Badge color="gray" variant="square">
        Badge
      </Badge>
      <Badge color="pink" variant="square">
        Badge
      </Badge>
    </div>
  );
}

export default App;
