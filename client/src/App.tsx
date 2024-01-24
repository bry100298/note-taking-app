import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useGoogleOneTapLogin } from "@react-oauth/google";

import { useStore } from "./hooks/useStore";
import Profile from "./components/Profile";
import NewApp from "./newapp";
function App() {
  const { authData } = useStore();

  const setAuthData = useStore((state: any) => state.setAuthData);

  return (
    <>
      <div className="App">
        <GoogleOAuthProvider clientId="1042814038678-9to69o1tj9juk1f0gksu61q1k9br2a53.apps.googleusercontent.com">
          <div>
            <GoogleLogin
              useOneTap
              onSuccess={async (credentialResponse) => {
                const response = await axios.post(
                  "http://localhost:3001/login",
                  {
                    token: credentialResponse.credential,
                  }
                );
                const data = response.data;

                localStorage.setItem("authData", JSON.stringify(data));
                setAuthData(data);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            l{" "}
          </div>

          <Profile/>
          
        </GoogleOAuthProvider>
      </div>
    </>
  );
}

export default App;
