import './style.css';
import ErrorsRepository from './ErrorRepository';

const newError = new ErrorsRepository();
console.log(newError.translate(401));
