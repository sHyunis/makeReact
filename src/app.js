import { add } from "./add.js";
import { minus } from "./minus.js";
import { multiply } from "./multiply.js";

const App = () => {
  const sum = add(1, 2);
  const mi = minus(1, 2);
  const mul = multiply(1, 2);
  return (
    <>
      <h1>
        {sum}
        {mi}
        {mul}
      </h1>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
