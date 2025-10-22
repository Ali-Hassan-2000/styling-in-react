import './App.css'

import Button1 from './components/example-1-normal-css/Button.jsx';
import Button2 from './components/example-2-inline-css/Button.jsx';

function App() {

  return (
    <>
      {/* Using external CSS files to style React components is straightforward and familiar. 
      However, it’s important to remember that the styles defined in these files are global. 
      This means they might conflict if you use the same class or id names in different files. */}
      <div className="App"> <Button1 buttonText="Example 1" /> </div>

      {/*Inline styling in React is particularly useful for dynamic styling. Since styles are 
      applied as JavaScript objects, you can easily modify styles based on the component’s state 
      or props. This allows for more flexible and interactive styling that changes in response 
      to user actions or other conditions within the application. As the application grows, 
      managing styles inline can become cumbersome and less maintainable. This approach can 
      lead to code duplication and difficulty in tracking style-related bugs. */}
      <div className="App"> <Button2 buttonText="Example 2" /> </div>


    </>
    
  )
}

export default App
