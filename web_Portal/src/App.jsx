import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <GoogleOAuthProvider clientId='829979121841-9cgqra6vo2nuo1lqmjnfed8u42do52ul.apps.googleusercontent.com'>
        <Routes />
      </GoogleOAuthProvider>
    </ProSidebarProvider>
  );
}

export default App;
