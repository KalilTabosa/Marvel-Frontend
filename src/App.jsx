import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeViewContainer } from "./containers/views/HomeViewContainer";
import { CharacterViewContainer } from "./containers/views/CharacterViewContainer";
import { SignInViewContainer } from "./containers/views/SignInViewContainer";
import { SignUpViewContainer } from "./containers/views/SignUpViewContainer";
import { AuthProvider } from "./contexts/Auth";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeViewContainer />} />
          <Route path="/signin" element={<SignInViewContainer />} />
          <Route path="/signup" element={<SignUpViewContainer />} />
          <Route path="/characters/:id" element={<CharacterViewContainer />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};