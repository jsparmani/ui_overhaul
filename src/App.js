import React from "react";
import {Switch, HashRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import HomeAlt from "./pages/HomeAlt";
import About from "./pages/About";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Project from "./pages/Project";
import Resources from "./pages/Resources";
import Team from "./pages/Team";

import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

const theme = {
    palette: {
        type: "dark",
    },
};

const App = () => {
    const muiTheme = createMuiTheme(theme);

    return (
        <MuiThemeProvider theme={muiTheme}>
            <Router>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={HomeAlt} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/events" component={Events} />
                        <Route exact path="/projects" component={Project} />
                        <Route exact path="/resources" component={Resources} />
                        {/* <Route exact path='/achievements' component={Achievements} /> */}
                        <Route exact path="/team" component={Team} />
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
