import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes"
import './App.css';

function App() {
   const isLoggedIn = true; // Set this based on your authentication logic

   return (
     <Router>
       <Routes>
         {routes(isLoggedIn).map((route, index) => (
           <Route
             key={index}
             path={route.path}
             element={route.element}
           />
         ))}
       </Routes>
     </Router>
   );
}

export default App;
