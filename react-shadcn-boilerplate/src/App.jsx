import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        React JSX + Tailwind + shadcn/ui
      </h1>
      <Button variant="default">Primary</Button>
      <Button variant="secondary" className="ml-4">
        Secondary
      </Button>
      <Button variant="outline" className="ml-4">
        Outline
      </Button>
    </div>
  );
}

export default App;
