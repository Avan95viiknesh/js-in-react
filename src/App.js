import React,{useState  } from 'react';
import './App.css';

function App() {
 

  const [index, setIndex] = useState(0);

 
  const change = ['primary', 'success', 'warning', 'danger' ]


const random = change[Math.floor(Math.random() * change.length)]

 console.log(random);


const textColor =() =>  {
  switch(random) {
    case 'primary': 
      return 'primary';
    case 'success': 
      return 'success'
    case 'warning': 
      return 'warning'
    case 'danger': 
      return 'danger'   
    default: 
     
  }
}


 const addElement= ( ) => {
 setIndex(index +1)
  
 }
 


  return (
    <>
  <div className="App">



  <button  onClick={addElement} >get item</button>  
  <h1 > the color of <span className= {textColor()}> {random} </span>  </h1> 
  





 
</div>
    </>
  
  );
}

export default App;
