import { Grid } from '@material-ui/core'
const Home = () => {
  return (
    <Grid item xs={12} container spacing={1}>
      <Grid item lg={12} style={{ height: "670px", marginTop: "40px", marginLeft: "75px", marginRight: "75px" }} >
        <Grid style={{ display: "flex" }}>
          <Grid item lg={12} style={{ height: "330px", width: "394.66px", backgroundColor: "#f2f1f0" }}>
            <Grid item lg={12} style={{ height: "100px", width: "100px" }}><img src="myntralogo.png" style={{width: "100px" }}></img></Grid>
              <Grid item lg={12} style={{ height: "48px" }}><h1>Why Myntra ?</h1></Grid>
              <Grid item lg={12} style={{ height: "100px" }}><p>Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.</p></Grid>
          </Grid>
          <Grid item lg={12} style={{ height: "330px", width: "394.66px", background: "#ffb3ff" }}>
            <img src="women.gif" style={{ height: "100%", width: "100%" }}></img>
          </Grid>
          <Grid item lg={12} style={{ height: "330px", width: "394.66px" }}>
            <img src="saving.gif" style={{ height: "50%", width: "100%", marginTop: "75px" }}></img>
          </Grid>
        </Grid>
        <Grid style={{ display: "flex" }}>
          <Grid item lg={12} style={{ height: "330px", width: "394.66px", backgroundColor: "#ccccb3" }}>
            <img src="makeup.jpeg" style={{ height: "100%", width: "100%" }}></img>
          </Grid>
          <Grid item lg={12} style={{ height: "330px", width: "394.66px", position: "relative", bottom: "90px", backgroundColor: "#FFE5E3" }}>
            <img src="kids.jpeg" style={{ height: "100%", width: "100%" }}></img>
          </Grid>
          <Grid item lg={12} style={{ height: "330px", width: "394.66px", backgroundColor: "#E9F5E9" }}>
            <img src="mens.gif" style={{ height: "100%", width: "100%" }}></img>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Home;
