

function Quiz(){
  return(
    <>
      <h1>Question</h1>
      <h4>1 of 15</h4>
      <h2>Which is the only mammal that can jump?</h2>
      <div>
        <div className="buttons-top">
          <button className="button-1">Dog</button>
          <button className="button-2">Elephant</button>
        </div>
        <div className="buttons-bottom">
          <button className="button-3">Goat</button>
          <button className="button-4">Lion</button>
        </div>
      </div>

      <div className="options">
        <button className="previous">Previous</button>
        <button className="next">Next</button>
        <button className="quit">Quit</button>
      </div>
    
    </>
  )

}

export default Quiz;