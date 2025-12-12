import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';

let counter = 0;

const updateCounter = () => {
 ReactDOM.createRoot(document.getElementById('root')).render(
  
    <SecondsCounter seconds = {counter}/>
 );
}
updateCounter();

setInterval(()=>{
  counter++;
  updateCounter();
  console.log("contador:", counter);

}, 1000);

