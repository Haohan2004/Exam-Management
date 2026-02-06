
import './App.css'
import Login from "./Component/Login.tsx";
import {Routes,Route} from "react-router-dom";
import Register from "./Component/Register.tsx";
import Dashboard from "./Component/Dashboard.tsx";
import Question from "./Component/Question.tsx";

function App() {

  return (
    <>
      <main>
          <Routes>
              <Route path="/auth/login" element={<Login/>}/>
              <Route path="/auth/register" element={<Register/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/question" element={<Question/>}/>


          </Routes>
      </main>
    </>
  )
}

export default App
