import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AppRoutes from "./routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
