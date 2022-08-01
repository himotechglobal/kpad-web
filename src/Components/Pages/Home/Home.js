import React from "react";
import Header from "../../Header";
import { Link } from "react-router-dom";
import Img4 from "../../Images/img4.png";
import Img5 from "../../Images/img5.png";
import Img6 from "../../Images/img6.png";
import Img7 from "../../Images/img7.png";
import Img8 from "../../Images/img8.png";
import Img9 from "../../Images/img9.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Home = () => {
  return (
    <>
      <Header />
      <section className="wrap-2">
        <div className="container-fluid bag-9">
          <div className="row bg-image">
            <div className="col-md-6">
              <div className="bag-6">
                <p>
                  Enter the gateway of <br />
                  Blockchain Gaming
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bag-7">
                <p>
                  Kpad is an open-source public <br />
                  blockchain for all who wish to build,
                  <br /> work, or play in the metaverse.
                </p>
              </div>
              <div className="bag-71">
                <p>
                  Kpad is an open-source public blockchain for all who wish to
                  build, work, or play in the metaverse.
                </p>
              </div>
            </div>
            <div className="col-md-12 bag-9">
              <div className="bag-8">
                <ul>
                  <li>
                    <Link to="/">Know more</Link>
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/">Buy on pancake</Link>
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/">Buy on Something</Link>
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/">Buy on Something</Link>
                    <i className="fa fa-angle-right"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="bag-10">
                <div className="bag-11">
                  <h2>What is Kpad?</h2>
                  <p>
                    Kpad is an open-source public blockchain for all who wish to
                    build, work, or play in the metaverse.
                  </p>
                  <Link to="">
                    Read More <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="bag-10">
                <div className="bag-12">
                  <h2>Get Started</h2>
                  <p>
                    Kpad is an open-source public blockchain for all who wish to
                    build, work, or play in the metaverse.
                  </p>
                  <Link to="">
                    Read More <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="bag-10">
                <div className="bag-13">
                  <h2>What is Kpad?</h2>
                  <p>
                    Kpad is an open-source public blockchain for all who wish to
                    build, work, or play in the metaverse.
                  </p>
                  <Link to="">
                    Read More <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-14">
                <h2>Upcoming Pool</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-15">
                <img src={Img4} alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-16">
                <div className="bag-17">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Min allocation</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0.01</td>
                              <td>TBA</td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-16">
                <div className="bag-17 mt-5">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Min allocation</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0.01</td>
                              <td>TBA</td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-14">
                <h2>Live Pool</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-15">
                <img src={Img4} alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-16">
                <div className="bag-17">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Total Raise</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                379997.79 <span className="span">BUSD</span>
                              </td>
                              <td>
                                3301.57 <span className="span">BUSD</span>
                              </td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bag-18">
                        <img src={Img6} alt="" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bag-19">
                            <h6>Progess</h6>
                            <span>100%</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bag-20">
                            <p>Max Partcipation 4844</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bag-16">
                <div className="bag-17">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Total Raise</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                379997.79 <span className="span">BUSD</span>
                              </td>
                              <td>
                                3301.57 <span className="span">BUSD</span>
                              </td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bag-18">
                        <img src={Img6} alt="" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bag-19">
                            <h6>Progess</h6>
                            <span>100%</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bag-20">
                            <p>Max Partcipation 4844</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-14">
                <h2>Completed Pool</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-15">
                <img src={Img4} alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-16">
                <div className="bag-17">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Total Raise</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                379997.79 <span className="span">BUSD</span>
                              </td>
                              <td>
                                3301.57 <span className="span">BUSD</span>
                              </td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bag-18">
                        <img src={Img6} alt="" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bag-19">
                            <h6>Progess</h6>
                            <span>100%</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bag-20">
                            <p>Max Partcipation 4844</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="bag-16">
                <div className="bag-17">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Total Raise</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                379997.79 <span className="span">BUSD</span>
                              </td>
                              <td>
                                3301.57 <span className="span">BUSD</span>
                              </td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bag-18">
                        <img src={Img6} alt="" />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bag-19">
                            <h6>Progess</h6>
                            <span>100%</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bag-20">
                            <p>Max Partcipation 4844</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-14">
                <h2>Cancelled Pool</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-15">
                <img src={Img4} alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-16">
                <div className="bag-17">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Min allocation</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0.01</td>
                              <td>TBA</td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-16">
                <div className="bag-17 mt-5">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={Img5} alt="" />
                    </div>
                    <div className="col-md-10">
                      <h6>TOYOVERSE</h6>
                      <h5>
                        <span>IN</span> 10 Days
                      </h5>
                      <p>
                        Toyo starts as a play-to-earn strategic PVP/PVE
                        blockchain fighting game with NFT action-figure
                        characters, body parts, and item ownership.
                      </p>
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Min allocation</th>
                              <th>Minimum</th>
                              <th>Access</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>0.01</td>
                              <td>TBA</td>
                              <td>Public</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-14">
                <h2>FAQs</h2>
              </div>
              <div className="bag-15">
                <img src={Img4} alt="" />
              </div>
              <Accordion className="bag-26">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="white"
                >
                  <Typography>
                    What is the benefit of $KPAD token holders?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="bag-27">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="white"
                >
                  <Typography>
                    What is the benefit of $KPAD token holders?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="bag-26">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="white"
                >
                  <Typography>
                    What is the benefit of $KPAD token holders?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="bag-27">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="white"
                >
                  <Typography>
                    What is the benefit of $KPAD token holders?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap-6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-25">
                <img src={Img7} alt="" />
                <img src={Img8} alt="" />
                <img src={Img9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
