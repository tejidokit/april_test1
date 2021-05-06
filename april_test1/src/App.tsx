import React from "react";



// const SayHello: FunctionComponent<{ name: string }> = ({ name }) => {
  
//   return (
//     <div className="hello">
//       Hello {name}
//     </div>
//   );
// }

// const sayHello = () => { 
//   return "Hello"
// }

const Greeting: React.FunctionComponent<{ time: number, place: string }> = ({time, place}) => {
  return <h4>hello world</h4>
}



interface IGreetingProps {
  time: number;
  place: string;
}

interface IGreetingProps2 extends IGreetingProps {
  person?: string;
}

const Greeting2: React.FunctionComponent<IGreetingProps2> = ({children, time, place, person}) => {
  return <>{children}</>
}

// const Ayo = () => {
//   return ('h1',{},'Hello World')
// }


function App() {

  return (
    <>
      <Greeting time={6} place={"world"}/>

      <Greeting2 time={6} place={"world"}>
        hello
      </Greeting2>
    </>
  )
}

export default App;


export function App2() {

  return (
    <>
      <Greeting time={6} place={"world"}/>

      <Greeting2 time={6} place={"world"}>
        hello
      </Greeting2>
    </>
  )
}




// #############################


