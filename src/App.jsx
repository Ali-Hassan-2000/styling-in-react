import './App.css'

import Button1 from './components/example-1-normal-css/Button';

function App() {

  return (
    <>
      {/* Using external CSS files to style React components is straightforward and familiar. 
      However, it’s important to remember that the styles defined in these files are global. 
      This means they might conflict if you use the same class or id names in different files. */}
      <div className="App"> <Button1 buttonText="Example 1" /> </div>

      
    </>
    
  )
}

export default App
