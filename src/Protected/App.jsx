import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from  "./ProtectedRoute";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated
                
            }/>}/>
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated}/>}
            />
            <Route
            path="/dashboard"
            element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard/>
                </ProtectedRoute>
            }
            />
           
        </Routes>
        </BrowserRouter>
    );


}

export default App;