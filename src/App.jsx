const App = () => {
  return(
    <div className="bg-white h-screen w-screen flex justify-center items-center text-black">
      <a href="https://www.linkedin.com/in/mugimustakim/">
        <button 
          className="btn bg-black flex w-72 px-3 text-[1rem]"
          onClick="">
            My Linked<span className="bg-white text-black p-[3px] rounded -ml-[7px]">in</span>
        </button>
      </a>
    </div>
  )
}

export default App;