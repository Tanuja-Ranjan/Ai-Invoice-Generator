import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/Dashboard";

const ClerkProtected = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/**it must be protected route */}
      <Route
        path="/app"
        element={
          <ClerkProtected>
            <AppShell />
          </ClerkProtected>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
