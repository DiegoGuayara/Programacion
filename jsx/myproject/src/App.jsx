function color(x){
  const prueba = document.getElementById('prueba');
  prueba.style.color = x;
}

function App() {

  return (
    <>
      <button onclick='color("red")' id='prueba'>Hola</button>
    </>
  )
}



export default App
