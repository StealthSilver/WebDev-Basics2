
import './App.css'

function Title() {
  return <h1>I am the Title</h1>;
}

function Description(){
  return <h3>I am the description</h3>
}

function App() {
 

  return (
   <div>
    <h1>This is hte app component</h1>
    <p>inside the app component we have : </p>
    <Title />
    <Description/>
    <Title />
    <Description/>
    </div> );
}

export default App
