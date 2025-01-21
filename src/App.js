import SearchBar from "./components/utils/SearchBar";
function App() {
  const styles = {
    fontSize: '50px',
    height: '100vh',
    width: '100vw',
    paddingTop: "80px",
    backgroundColor: '#ECE2C6'
  }
  return (
    <div style={{...styles}}>
      <SearchBar />
      
    </div>
  );
}

export default App;
