import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import RoutesMain from "./routes/Rotas";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
