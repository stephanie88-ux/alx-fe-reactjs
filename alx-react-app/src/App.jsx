import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />
      <Footer />
    </div>
  );
}

export default App;
