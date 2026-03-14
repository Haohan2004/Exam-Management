
import './App.css'
import Login from "./Component/Login.tsx";
import {Routes,Route} from "react-router-dom";
import Register from "./Component/Register.tsx";
import Dashboard from "./Component/Dashboard.tsx";
import QuestionPage from "./Component/QuestionPage.tsx";
import GroupPage from "./Component/GroupPage.tsx";
import SubjectPage from "./Component/SubjectPage.tsx";
import AdminLayout from "./Component/AdminLayout.tsx";

function App() {

  return (
    <>
      <main>
          <Routes >
              <Route path="/admin" element={<AdminLayout/>}>

                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="question" element={<QuestionPage/>}/>
                <Route path="group" element={<GroupPage/>}/>
                 <Route path="subject" element={<SubjectPage/>}/>
              </Route>
          </Routes>
          <Routes>
              <Route path="/auth/login" element={<Login/>}/>
              <Route path="/auth/register" element={<Register/>}/>
          </Routes>
      </main>
    </>
  )
}

export default App
