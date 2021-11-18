import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import YogaForm from '../Form/YogaForm.js';
import PaymentForm from '../Payment/PaymentForm';

export default function App() {
  return (
    <div className="container mt-3">
      <div className="row">
      <div className="col-md-5">
      <BrowserRouter>
        <YogaForm />
        <PaymentForm/>
      </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

