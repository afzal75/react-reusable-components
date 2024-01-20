
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

const App = () => {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-96 border border-red-950">
          <Button variant="ghost w-full">
            Click
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default App;