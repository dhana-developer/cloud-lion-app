
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
       <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />}> </Route>
        <Route path="/add-customer" element={<MultiStepForm />}></Route>
        <Route path="/edit-customer/:id" element={<MultiStepEditForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}



// import './App.css';
// import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { useState  } from "react";
// import { MultiStepForm } from "./components/MultiStepForm";
// import { questions } from "./Questions";


// function App() {
//   const [index, setIndex] = useState(1);
//   const [submitted, setSubmitted] = useState(false);
//   const totalPagesCount = questions?.length || 0;
//   // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
//   const [pagesAnswers, setPagesAnswers] = useState({});

//   const prevButton = () => {
//     if (index > 1) {
//       setIndex(prevIndex => prevIndex - 1);
//     }
//   }

//   const nextButton = () => {
//     if (index - 3) {
//       setIndex(prevIndex => prevIndex + 1);
//     } else {
//       // clear the form on submit
//       setPagesAnswers({});
//       setSubmitted(true);
//     }
//   }

//   const onPageAnswerUpdate = (step, answersObj) => {
//     setPagesAnswers({...pagesAnswers, [step]: answersObj});
//   }

//   const handleStart = () => {
//     setIndex(1);
//     setSubmitted(false);
//   }

//   return (
//     <div className="App">
//       <Container className="h-100">
//         <Row className="m-5">
//           <Col className="align-self-center">
//             <MultiStepProgressBar
//               step={index}
//               />
//           </Col>
//         </Row>
//         <Row>
//           {
//             submitted ?
          
//             <Card>
//               <Card.Body>
             
//                 <p>   Your answers have been submitted!</p>
//               </Card.Body>
//               <Card.Footer>
//                 <Button onClick={handleStart}>Start Over</Button>
//               </Card.Footer>
//             </Card> :
//           <Card>
//             <Card.Body>
//               <MultiStepForm
//                 list={questions}
//                 step={index}
//                 onPageUpdate={onPageAnswerUpdate}
//                 pagesAnswers={pagesAnswers}
//                 />
//             </Card.Body>
//             <Card.Footer className="d-flex justify-content-between">
//               <Button onClick={prevButton} disabled={index === 1}>Previous</Button>
//               <Button onClick={nextButton}>{index === totalPagesCount ? 'Submit' : 'Next'}</Button>
//             </Card.Footer>
//           </Card>
//         }
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;