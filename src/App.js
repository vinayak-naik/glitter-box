import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import HomeComponent from "./screens/home";
import LoginComponent from "./screens/login";
import RegisterComponent from "./screens/register";
import SplashComponent from "./components/splash";

const theme = createTheme({
  palette: {
    primary: {
      main: "#388e3c",
    },
    secondary: {
      main: "#ef6c00",
    },
  },
 
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" exact component={SplashComponent} />
            <Route path="/home" exact component={HomeComponent} />
            <Route path="/login" exact component={LoginComponent} />
            <Route path="/register" exact component={RegisterComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
