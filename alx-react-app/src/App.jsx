import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;
