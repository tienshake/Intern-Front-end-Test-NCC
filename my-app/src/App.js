import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
