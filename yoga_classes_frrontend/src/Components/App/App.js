import './App.css';
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import YogaForm from '../Form/YogaForm.js';
export default function App() {
  return (
    <div className="container mt-3">
      <div className="row">
      <div className="col-md-5">
      <BrowserRouter>
        <YogaForm />
      </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

