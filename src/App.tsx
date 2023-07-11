import OrderSummary from "./components/OrderSummary";

function App() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[hsl(225_100%_94%)] p-5 before:absolute before:top-0 before:h-full before:w-full before:bg-pattern-mobile before:bg-contain before:bg-no-repeat before:xl:bg-pattern-desktop">
      <OrderSummary />
    </div>
  );
}
export default App;
