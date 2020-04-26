import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // overflowX: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // display: 'flex',
        //  margin: 'auto',
        // width: '70%',
        // paddingTop: '1%',
        // paddingBottom: '1%',
        // fontSize: '1.3em',
        // fontWeight: '300'
    },
    toolbar: {
        display: "flex",
        // paddingRight:'50%',
        // paddingLeft:'20%'
    },
    button: {
        justifyContent: "space-around",
        display: "flex",
        margin: "auto",
        // width: '70%',
        // paddingTop: '1%',
        // paddingBottom: '1%',
        fontSize: "1.5em",
        fontWeight: "300",
        // paddingRight:'20%',
        textDecoration: "none",
        color: "black",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Nav = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.root}>
                <ResponsiveDiv>
                    <AppBar
                        position="static"
                        color="white"
                        className={classes.appbar}
                    >
                        <Toolbar className={classes.toolbar}>
                            <Link to="/" className={classes.button}>
                                Home
                            </Link>
                            <Link to="/events" className={classes.button}>
                                Events
                            </Link>
                            <Link to="#" className={classes.button}>
                                Resources
                            </Link>
                            <Link to="/projects" className={classes.button}>
                                Projects
                            </Link>
                            <Link to="/team" className={classes.button}>
                                Team
                            </Link>
                            {/* <Link to='/achievements' className={classes.button}>Achievements</Link> */}
                            <Link to="#" className={classes.button}>
                                Blog
                            </Link>
                        </Toolbar>
                    </AppBar>
                </ResponsiveDiv>
                <MobileDiv>
                    <AppBar position="static" color="white">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                DSC TIET
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </MobileDiv>
            </div>
        </Fragment>
    );
};

const ResponsiveDiv = styled.div`
    @media only screen and (max-width: 1000px) {
        display: none;
    }
`;
const MobileDiv = styled.div`
    @media only screen and (min-width: 1000px) {
        display: none;
    }
`;

export default Nav;
