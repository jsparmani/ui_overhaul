import React, { Fragment, useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import image from "../assets/undraw_positive_attitude_xaae.svg";
import image2 from "../assets/undraw_progressive_app_m9ms.svg";
import iotImage from "../assets/undraw_Firmware_jw6u.svg";
import softwareImage from "../assets/undraw_programming_2svr.svg";
import mlImage from "../assets/undraw_Growing_qwt2.svg";
import blockchainImage from '../assets/undraw_digital_currency_qpak.svg';
import axios from 'axios';

// axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: "center",
      color: theme.palette.text.secondary,
    },
  
    button: {
      backgroundColor: "#746B6B",
      color: "white",
    },
    rootCard: {
      maxWidth: 400,
      height: 400,
    },
    media: {
      height: 230,
    },
    grid: {
      height: 550
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 400,
      margin: "auto",
    },
    paperModal: {
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    large: {
        width: theme.spacing(11),
        height: theme.spacing(11),
      },
      gridMobile:{
          height:300
      }
  }));
  
const Team = () => {
    const classes = useStyles();
    const[team,setTeam] = useState([]);
    useEffect(() => {
     const fetchData = async () =>{
      const res= await axios.get('https://dsctiet.pythonanywhere.com/api/team/');
      setTeam(res.data);
      console.log(team);
     }
     fetchData();
    }, [])
    return (
        <Fragment>
          <CssBaseline />
          <Container fixed>
          <Grid container spacing={2} className={classes.grid} style={{height:'230px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "100px" }}
            >
            <Typography variant="h2" style={{ fontWeight: "bold", textAlign:'center' }}>
              Meet the Team
                        </Typography>
                 </Grid>
          </Grid>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{paddingLeft:'250px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Shubhank Saxena</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Shubhank Saxena" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{paddingLeft:'80px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Aman Arora</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Co-Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Aman Arora" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Shubhank Saxena</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Shubhank Saxena" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Aman Arora</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Co-Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Aman Arora" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'500px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingTop: "80px", paddingLeft:'250px' }}
            >
                <img src={image} style={{ height: "375px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "20px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
              Web and App Team
                        </Typography>
                 </Grid>
          </Grid>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{paddingLeft:'250px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{paddingLeft:'80px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingTop: "80px", paddingLeft:'250px' }}
            >
                <img src={image2} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{height:'150px',paddingTop:'130px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "0px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             IOT Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "350px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             IOT Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{paddingLeft:'250px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{paddingLeft:'80px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'300px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'150px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingLeft:'250px' }}
            >
                <img src={iotImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'90px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'180px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'300px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'450px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{height:'180px', paddingTop:'180px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{}}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Software Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "460px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Software Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'90px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{paddingLeft:'250px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{paddingLeft:'80px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'410px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'170px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{  paddingLeft:'250px' }}
            >
                <img src={softwareImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'100px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'180px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'300px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'450px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{paddingTop: "180px",height:'180px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Machine Learning Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "460px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Machine Learning Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'90px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{paddingLeft:'250px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{paddingLeft:'80px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'460px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'170px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingLeft:'250px' }}
            >
                <img src={mlImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'100px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'180px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'300px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'450px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{paddingTop: "180px",height:'180px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{  }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Blockchain Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "460px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Blockchain Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'90px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{paddingLeft:'250px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{paddingLeft:'80px'}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'410px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jaskeerat Singh</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jaskeerat Singh" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Soumya Swaraj</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Soumya Swaraj" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'170px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{  paddingLeft:'250px' }}
            >
                <img src={blockchainImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'100px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px', paddingTop:'180px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
          </Hidden>
          <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'300px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>
            <Hidden mdUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'100px', paddingTop:'450px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Jay Parmani</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Jay Parmani" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Kush Daga</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Kush Daga" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Parth Shah</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Developer</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Parth Shah" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
            </Grid>
            </Hidden>   
          </Container>  
        </Fragment>
    )
}

export default Team
