import { FunctionComponent, useState } from "react";



const SayHello: FunctionComponent<{ name: string }> = ({ name }) => {
  
  return (
    <div className="hello">
      Hello {name}
    </div>
  );
}

const sayHello = () => { 
  return "Hello"
}



function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="App">
      <header className="App-header">
        
        {/* <button onClick={toggle}>
          Click Me
        </button> */}
        {/* <div>
          NavBar 
        </div> */}

        {open && <SayHello name="Cham" />}

      </header>
    </div>
  );
}

export default App;

// #############################


