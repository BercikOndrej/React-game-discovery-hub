function App() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[5em,1fr] lg:grid-cols-[200px,1fr]">
        <div className="row-span-1 col-span-2">NavBar</div>

        <div className="hidden row-span-1 col-span-1 lg:inline">Aside</div>

        <div className="col-span-1 row-span-1 mx-auto p-4 flex flex-col gap-4">
          Main
        </div>
      </div>
    </>
  );
}

export default App;
