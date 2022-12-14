import { Row, Col, Container,Button,ModalHeader,ModalFooter, Modal, ModalBody } from "reactstrap";

import React, { useEffect, useState } from "react";
import { withStorage } from 'react-browser-storage';
 
import binanceChain from "../images/icons/binanceChain.png";
import coin98 from "../images/icons/coin98.png";
import mathwallet from "../images/icons/mathwallet.png";
import metamask from "../images/icons/metamask.png";
import safepal from "../images/icons/safepal.png";
import tokenpocket from "../images/icons/tokenpocket.png";
import Trustwallet from "../images/icons/Trustwallet.png";
import walletConnect from "../images/icons/walletConnect.png";
import {useWallet} from '@binance-chain/bsc-use-wallet' 
import WalletConnectProvider from "@walletconnect/web3-provider";

import Web3 from "web3";
import Web3Modal from "web3modal";
import { injected } from "../../Config/connectors";
import { useWeb3React } from "@web3-react/core";

const ConnectButton = ({ provider }) => {
  const [showOption, setOption]= useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setSubmenu]= useState(false)
  const wallet = useWallet()
  const [connectModal, setconnectModal] = useState(null);

  const [disconnectModal, setdisconnectModal] = useState(false);
 
  
  const connectModalToggle = () => setconnectModal(!connectModal);
  const disconnectModalToggle = () => setdisconnectModal(!disconnectModal);
  const [ providerId, setProvider, clearProvider ] = provider;

  const isWalletConnected=()=>{
    return wallet.status === "connected" 
  }

  const connectWallet = (_p) => {
    if(_p == "injected"){
      wallet.connect();
    }
    else{
      wallet.connect(_p);
    }

    setProvider(_p);
    setconnectModal(!connectModal)
  } 

  
  const gotoProfile = () => {
      window.location.replace("/profile");
  } 

  const logout = () => {
    wallet.reset() ;
    setProvider(null);
    setdisconnectModal(!disconnectModal)
 
  } 


  const getTrimmedWallet = () => {
    let walletAddress = wallet.account;
    console.log("walletAddress", walletAddress)

    if(walletAddress){
      walletAddress = walletAddress.substring(0, 6)+"...."+walletAddress.substring(walletAddress.length - 6)
    }
    return walletAddress

  }
  


  useEffect(()=>{
    if(providerId == "injected"){
      wallet.connect();
    }
    else{
      wallet.connect(providerId)
    }
      

  },[])
  return (
          <>

          {wallet.account && 
            <button className="connect-btn" onClick={() => disconnectModalToggle()}>{wallet.account.substring(0, 6)+"...."+wallet.account.substring(wallet.account.length - 6)}</button>
          
          }
          {!wallet.account && 
            <button className="connect-btn" onClick={() => connectModalToggle()}>Unlock Wallet</button>          
        }
               

      
            
 <Modal isOpen={disconnectModal} toggle={disconnectModalToggle} className="disconnect-box"  centered={true}>
 <ModalHeader toggle={disconnectModalToggle}><span className="ml-4 roititle font-weight-bold">Your Wallet</span></ModalHeader>
   <ModalBody>
   <div className="mt-3 text-center">
           

                {
                  wallet.account &&
               <>
                <p className="walletText">{wallet.account}</p>
                <p className="mt-2 mb-3 text-center">
                  <a href={"https://bscscan.com/address/"+wallet.account} target="_blank">View on BscScan? <i class="fa fa-external-link" aria-hidden="true"></i></a>
                  </p>
                 <button className="connectbtn mb-3" onClick={() => gotoProfile()}>Profile</button>     
                 <button className="connectbtn mb-3" onClick={() => logout()}>Logout</button>     
               </>
                }
       </div>        
   </ModalBody>
    
 </Modal>

 <Modal isOpen={connectModal} toggle={connectModalToggle} className="connect-box"  centered={true}>
 <ModalHeader toggle={connectModalToggle}><span className="ml-1 roititle font-weight-bold">Connect Wallet</span></ModalHeader>
   <ModalBody>
   <div className="mt-2">
           
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('injected')}><span>MetaMask</span> <img className="" src={metamask} /> </div>                 
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('injected')}><span >TrustWallet</span> <img  src={Trustwallet} /> </div>                 
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('injected')}><span >MathWallet</span> <img src={mathwallet} /> </div>                 
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('injected')}><span >TokenPocket</span> <img  src={tokenpocket} /> </div>                 
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('walletconnect')}><span >Wallet Connect</span> <img  src={walletConnect} /> </div>                 
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('bsc')}><span >Binance Smart Chain Wallet</span> <img  src={binanceChain} /> </div>                 
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('injected')}><span >Safepal Wallet</span> <img  src={safepal} /> </div>                 
                 <div className="connectbtn mb-2 p-2 pl-3" onClick={() => connectWallet('injected')}><span >Coin98 Wallet</span> <img src={coin98} /> </div>                 
                                              
                <p className="bottomtext"><a href="https://docs.pancakeswap.finance/get-started/connection-guide" target="_blank"><i class="fa fa-question-circle-o" aria-hidden="true"></i> Learn how to connect?   </a></p>
       </div>        
   </ModalBody>
    
 </Modal>

    </>
  );
};
export default withStorage(['provider'])(ConnectButton);

