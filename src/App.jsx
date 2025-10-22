import './App.css'

import Button1 from './components/example-1-normal-css/Button.jsx';
import Button2 from './components/example-2-inline-css/Button.jsx';
import Button3 from './components/example-3-styled-components/Button.jsx';
import Button4 from './components/example-4-css-modules/Button.jsx'

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

      {/* Using styled-components, styles are tightly coupled with components, leading to more 
      modular and reusable code. This method promotes the creation of self-contained components 
      where both logic and style are defined together, enhancing code clarity and ease of maintenance.
      As far as libraries go, this one is among the most popular.
      For developers new to this approach, there can be a learning curve in understanding how to 
      use JavaScript for styling. This method also increases the complexity of your code, as it 
      blends CSS with JavaScript, which is not preferable for those who like to keep styling 
      separate from scripting.*/}
      <div className="App"> <Button3 buttonText="Example 3" /> </div>

      {/*Inline styling in React is particularly useful for dynamic styling. Since styles are 
      applied as JavaScript objects, you can easily modify styles based on the component’s state 
      or props. This allows for more flexible and interactive styling that changes in response 
      to user actions or other conditions within the application. As the application grows, 
      managing styles inline can become cumbersome and less maintainable. This approach can 
      lead to code duplication and difficulty in tracking style-related bugs. */}
      <div className="App"> <Button2 buttonText="Example 2" /> </div>

      {/* CSS Modules automatically ensure that all class names are local to the component, 
      significantly reducing the risk of style conflicts. This scoping makes it easier to 
      maintain styles across large projects, as you can be confident that changes in one 
      component’s CSS won’t inadvertently impact other components. */}
      <div className="App"> <Button4 buttonText="Example 4" /> </div>


    </>
    
  )
}

export default App
