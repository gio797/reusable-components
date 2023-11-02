import Badge from "./components/badge/Badge";
import Banner from "./components/banner/Banner";
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
      <Banner status="warning" title="Congratulations!" />
    </div>
  );
}

export default App;
