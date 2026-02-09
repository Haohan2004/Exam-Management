
import './App.css'
import Login from "./Component/Login.tsx";
import {Routes,Route} from "react-router-dom";
import Register from "./Component/Register.tsx";
import Dashboard from "./Component/Dashboard.tsx";
import QuestionPage from "./Component/QuestionPage.tsx";

function App() {

  return (
    <>
      <main>
          <Routes>
              <Route path="/auth/login" element={<Login/>}/>
              <Route path="/auth/register" element={<Register/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/question" element={<QuestionPage/>}/>


          </Routes>
      </main>
    </>
  )
}

export default App
