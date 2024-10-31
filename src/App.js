
import MultiStepForm from "./MultiStepForm";
import MultiStepEditForm from "./MultiStepEditForm";
// import CustomerInfo from "./CustomerInfo";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import List from "./List.js";
import Navbar from "./Navbar.js";
// import EditForm from "./EditForm.js";

      

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <List /> 
      <MultiStepForm />  
       <BrowserRouter>  
      <Routes>
        <Route path="/" element={<List />}> </Route>
        <Route path="/add-customer" element={<MultiStepForm />}></Route>
        <Route path="/edit-customer/:id" element={<MultiStepEditForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}


