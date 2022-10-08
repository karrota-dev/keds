import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${ darkMode && "dark"}`}>
          
    </div>
  );
}

export default App;
