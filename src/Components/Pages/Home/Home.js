import React, { Component, useEffect , useState } from 'react';
import Header from "../../Header";
import { Link } from "react-router-dom";
import Img4 from "../../images/img4.png";
import Img5 from "../../images/img5.png";
import Img6 from "../../images/img6.png";
import Img7 from "../../images/img7.png";
import Img8 from "../../images/img8.png";
import Img9 from "../../images/img9.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../Footer";

import { OLD_PRIVATE_SALE, PRIVATE_SALE } from '../../../Config/index.js';
import  PRIVATE_SALE_ABI from '../../../Config/PRIVATE_SALE_ABI.json';
import  TOKEN_ABI from '../../../Config/TOKEN_ABI.json';
import { useWallet } from '@binance-chain/bsc-use-wallet';
import Web3 from 'web3';
import PadCard from '../padchain/PadCard';
import OldPadCard from '../padchain/OldPadCard.js';
const Home = () => {


  const wallet = useWallet() ;
	let web3Provider  = window.ethereum ; 
	const [upcomingArray,setUpcomingArray] = useState([]);
	const [liveArray,setLiveArray] = useState([]);
	const [successArray,setSuccessArray] = useState([]);
	const [failArray,setFailArray] = useState([]);
 

	
	useEffect(() => {
		if(window.ethereum){
			web3Provider  = window.ethereum;
		  }
		  else{
			web3Provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')
		   
		  }
		  init()
	},[])


  const init = async () => {
		let _web3 = new Web3(web3Provider);
		let _privateSaleContract = new _web3.eth.Contract(PRIVATE_SALE_ABI,PRIVATE_SALE);
		let _arrayLength = await _privateSaleContract.methods.getPresaleCount().call()  ;
		console.log(_arrayLength);

		let _upcomingArray = [] ; 
		let _liveArray = [] ; 
		let _successArray = [] ; 
		let _failArray = [] ; 
		for(let i = 0 ; i < _arrayLength ; i++){

		let _presale = await _privateSaleContract.methods.getPresale(i).call()  ;

		if(_presale.status == 1 && _presale.startTime > new Date().getTime()/1e3 ){
			_upcomingArray.push({
				count: i 
			});
		}
		else if(_presale.status == 1 && _presale.startTime < new Date().getTime()/1e3 ){
			_liveArray.push({
				count: i 
			});
		}
		else if(_presale.status == 2  || _presale.status == 4 || _presale.status == 5 || _presale.status == 6 ){
			_successArray.push({
				count: i 
			});
		}
		else if(_presale.status == 3  && _presale.raisedAmount > 0 ){
			_failArray.push({
				count: i 
			});
		}
			


			if(i == (_arrayLength  -1)){

				setUpcomingArray(_upcomingArray.reverse());
				setLiveArray(_liveArray.reverse());
				setSuccessArray(_successArray.reverse());
				setFailArray(_failArray.reverse());

			}
		}
	  }


  
  return (
    <>
      <Header />
      <section className="wrap-2">
        <div className="container-fluid bag-9">
          <div className="row bg-image">
            <div className="col-md-6">
              <div className="bag-6">
                <p>Rollercoaster ride into the world of blockchain</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bag-7">
                <p>
                  KlaytnPad is a fully automated launchpad for all Klaytn
                  Network projects
                </p>
              </div>
              <div className="bag-71">
                <p>
                  KlaytnPad is a fully automated launchpad for all Klaytn
                  Network projects
                </p>
              </div>
            </div>
            <div className="col-md-12 bag-9">
              <div className="bag-8">
                <ul>
                  <li>
                    <Link to="/">Apply as a project</Link>
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/">Buy on something</Link>
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                    <i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <Link to="/">Klaytnscope</Link>
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
                  <h2>What is KlaytnPad:</h2>
                  <p>
                    At KlaytnPad you will get a chance to be a part of unique
                    and different types of projects like DeFi, blockchain
                    gaming, NFTs and all those projects which utilize blockchain
                    for all of us.
                  </p>
                  <a href="https://medium.com/@KlaytnPad/introducing-klaytnpad-8bd607b6714f">
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="bag-10">
                <div className="bag-12">
                  <h2>How to get started</h2>
                  <p>
                    Buy $KPAD tokens according to our three tiers system, hold
                    in wallet and participate in the sales on FCFS basis
                    whenever they go live.
                  </p>
                  <a href="https://medium.com/@KlaytnPad/get-started-with-us-b4086a12faed">
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="bag-10">
                <div className="bag-13">
                  <h2>Klatynpad Tier System</h2>
                  <p>
                    At Klaytnpad, we have 3-Tier System and each tier have its
                    own allocation pools and max contribution limit and you must
                    hold our native $KPAD tokens to be eligible for each tier.
                  </p>
                  <a href="https://medium.com/@KlaytnPad/klaytnpad-tier-system-83bd9c48c1e5">
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
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
              <div className="wrp-list-box">
								
								{
                                         upcomingArray.length > 0 && upcomingArray.map((v,i) => {
                                             return (
                                                 <PadCard index={v.count} public={false} old={false}  />
                                             )
                                         })
                                     }

									 {
										 upcomingArray.length == 0 && 
										 <div className="text-center w-100 darkBg text-dark emptyCard d-flex align-items-center justify-content-center"><h4>No Presale Available to Show</h4></div>

									 }			
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
              <div className="wrp-list-box">
							{
                                         liveArray.length > 0 && liveArray.map((v,i) => {
                                             return (
                                                 <PadCard index={v.count} public={false} old={false}  />
                                             )
                                         })
                                     }

									 {
										 liveArray.length == 0 && 
										 <div className="text-center w-100 darkBg text-dark emptyCard d-flex align-items-center justify-content-center"><h4>No Presale Available to Show</h4></div>

									 }	
							
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
              <div className="wrp-list-box">
							
								 
							{/* <OldPadCard   public={false}  index={0}  /> */}
							{
                                         successArray.length > 0 && successArray.map((v,i) => {
                                             return (
                                                 <PadCard index={v.count} public={false} old={false}  />
                                             )
                                         })
                                     }

									 {
										 successArray.length == 0 && 
										 <div className="text-center w-100 darkBg text-dark emptyCard d-flex align-items-center justify-content-center"><h4>No Presale Available to Show</h4></div>

									 }
							 
									
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
              <div className="wrp-list-box">
									
							{
                                         failArray.length > 0 && failArray.map((v,i) => {
                                             return (
                                                 <PadCard index={v.count} public={false} old={false}  />
                                             )
                                         })
                                     }

									 {
										 failArray.length == 0 && 
										 <div className="text-center w-100 darkBg text-dark emptyCard d-flex align-items-center justify-content-center"><h4>No Presale Available to Show</h4></div>

									 }	

								 
									
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
                    Those who hold $KPAD will be able to join the token sales of
                    the projects which will be held at the Launchpad, and get
                    allocations from these projects before they release to the
                    market.
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
                  <Typography>What types of projects will be there?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The projects that we are going to target will be of
                    different types like Defi, Gaming, NFTs, and many others. No
                    doubt that the projects will be convincing however, it is
                    highly recommended to DYOR (Do Your Own Research) on each
                    project that we bring here for your peace of mind and to
                    choose the best for yourself.
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
                  <Typography>Which tier should you choose?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We have 3 tier systems named as Diamond, Gold & Silver and
                    each tier holds the value of some tokens. You need to be
                    careful while choosing the tier and must keep an eye on your
                    budget to get the best out of it.
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
                    What is the eligibility criteria for participating in IDO?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Investors will need to hold the $KPAD tokens in the wallet
                    to participate. There is no need to stake. $KPAD LPs will
                    also NOT count and the tokens must be available in your
                    wallet to be eligible.
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
                    What will be the duration of presales?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The duration of presales will be 12 hours but it doesn’t
                    mean that you have completed 12 hours. Sometimes the
                    presales are all done within a few hours so you need to
                    speed up a little.
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
                  <Typography>How to claim the tokens?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Claiming tokens won’t be airdrops so you will need to claim
                    IDO tokens manually when your vesting time is ready. You
                    will need $KPAD tokens in your wallet according to the tier
                    you participated in to be able to claim tokens and this will
                    apply to allocations for each vesting cycle.
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
                    Is there any locking system implemented?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, holders will be able to lock their $KPAD tokens as well
                    as their $KPAD LPs.
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
                  <Typography>Is there any tax on $KPAD token?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, there is tax on the Moonpad token. $KPAD will have 5%
                    LP tax in order to prevent switching wallet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
