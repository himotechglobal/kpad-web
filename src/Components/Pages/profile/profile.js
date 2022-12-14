import React, { Component } from 'react';
import $ from "jquery";
import { Row, Col, Container,Button,ModalHeader,ModalFooter, Modal, ModalBody } from "reactstrap";

import Header from '../../Header';
import Footer from '../../Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import Config, { MARKETPLACE } from '../../../Config/index.js';
import MARKETPLACE_ABI from '../../../Config/MARKETPLACE_ABI.json';
import { useWallet } from '@binance-chain/bsc-use-wallet';
import Web3 from 'web3';
import axios from "axios";

const Profile = () => {
	
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [bio,setBio] = useState(null);
    const [customUrl,setCustomUrl] = useState(null);
    const [twitter,setTwitter] = useState(null);
    const [personal,setPersonal] = useState(null);
    const [profilePic,setProfilePic] = useState(null);
    let web3Provider  = window.ethereum ; 
    const wallet = useWallet();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
	const [filedata , setFileData] = useState([]) ;
	const [fileName , setFileName] = useState(null) ;
	const [fileType , setFileType] = useState(null) ;
    const [apiModal, setApiModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    
    const successToggle = () => setSuccessModal(!successModal);

    const apiToggle = () => setApiModal(!apiModal);

    const init = async() => {
        let _web3 = new Web3(web3Provider);
        let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
        if(wallet.account){
            let _data = await _marketPlaceContract.methods.profiles(wallet.account).call() ;
            _data = JSON.parse(_data);
            setName(_data.name);
            setEmail(_data.email);
            setBio(_data.bio);
            setTwitter(_data.twitter);
            setPersonal(_data.personal);
            setCustomUrl(_data.customUrl);
            setProfilePic(_data.profilePic);
        }
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleTwitter = (e) => {
        setTwitter(e.target.value);
    }

    const handleCustomUrl = (e) => {
        setCustomUrl(e.target.value);
    }

    const handlePersonal = (e) => {
        setPersonal(e.target.value);
    }

    const handleSubmit = (e) => {
 
        let _web3 = new Web3(web3Provider);
        let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);

        var formData = new FormData();
        formData.append("filename", fileName);
        formData.append("fileType", fileType);
        formData.append("filedata", filedata);

        setApiModal(true) ;
        axios 
        .post("https://dev.wizard.financial/api/uploadprofile", formData,
        {
            headers: {
            'content-Type': 'multipart/form-data'
          }}
          ) 
        .then((response) => {
        setApiModal(false) ;

            if(response.data.result == "success"){

                let data =  {} ;
                data['name'] = name ;
                data['email'] = email ;
                data['bio'] = bio ;
                data['twitter'] = twitter ;
                data['personal'] = personal ;
                data['customUrl'] = customUrl ;
                data['profilePic'] = response.data.url ;
                let profileData = JSON.stringify(data);
                console.log(profileData);

        setModal(!modal);
        _marketPlaceContract.methods.saveProfile(profileData).send({
            from: wallet.account
        }).on('receipt', function(receipt){
            setModal(modal);
            setSuccessModal(true);
            
        }).on('error', function(receipt){
            setModal(modal);
      
        })

    }
}).catch(function (error) {
    setApiModal(false) ;


});
        
    }

	useEffect(() => {

    if(window.ethereum){
        web3Provider  = window.ethereum;
      }
      else{
        web3Provider = new Web3.providers.HttpProvider(Config.RPC_URL)
       
      }
 
      init() ;
 
    },[wallet.account])

	useEffect(() => {

		var that = this ;

		//   setInterval(() => {
		//     console.log(that.saleon);
		//   }, 1000);
		 function readURL(input, imgControlName) {
	  if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
		  $(imgControlName).attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);

        setFileName(input.files[0].name);
        setFileType(input.files[0].type);
        setFileData(input.files[0]) ;


		//   reader.readAsArrayBuffer(input.files[0])  // Read bufffered file
	
			// Callback
			// reader.onloadend = () => {
			// 	console.log("Buffer Read" ,Buffer(reader.result) )
			// 	that.file =  Buffer(reader.result) ;
			  
			// }
	  }
	}
	
	$("#imag").change(function() {
	  // add your logic to decide which image control you'll use
	  var imgControlName = "#ImgPreview";
	  readURL(this, imgControlName);
	  $('.preview1').addClass('it');
	  $('.btn-rmv1').addClass('rmv');
	});
	
	
	$("#removeImage1").click(function(e) {
	  e.preventDefault();
	  $("#imag").val("");
	  $("#ImgPreview").attr("src", "");
	  $('.preview1').removeClass('it');
	  $('.btn-rmv1').removeClass('rmv');
	});

       
	  })

 
		return(
			<div>
			 <Header />
			  <section id="edit-profile">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="edit-content">
                        <h4>Edit Profile</h4>
                        <p>You can set preferred display name, create your branded profile URL and manage other personal settings</p>
                    </div>
                </div>
            </div>
            
		<div className="row">
		<div class="col-lg-4">
                    <div class="prev">
                        <div class="yes preview-img2">
                            <img id="ImgPreview" src={profilePic}  class="preview1" />
                            <input type="button" id="removeImage1" value="x" class="btn-rmv1" />
                        </div> 
                    </div>
                    <div class="file-upload-wrp2">
                        <form id="myform">
                        <div class="yes">
                            <span class="btn_upload">
                            <input type="file" id="imag" title="" class="input-img"/>
                            Choose File
                            </span>
                        </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="right-content-u">
					<div class="user-input-wrp">
                            <label>Email</label>
                            <input value={email} onChange={handleEmail} placeholder="Enter your email" />
                        </div>
                        <div class="user-input-wrp">
                            <label>Display name</label>
                            <input value={name} onChange={handleName} placeholder="Enter your display name" />
                        </div>
                        <div class="user-input-wrp">
                            <label>Bio</label>
                            <input value={bio} onChange={handleBio} placeholder="Tell about yourself in a few words" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="user-input-wrp">
                            <label>Custom URL</label>
                            <input value={customUrl} onChange={handleCustomUrl} placeholder="https://wizard.financial/" />
                    </div>
                    <div class="user-input-wrp">
                            <label>Twitter Username</label>
                            <span>Link your Twitter account to gain more trust on the marketplace</span>
                            <input value={twitter} onChange={handleTwitter} placeholder="@" />
                    </div>
                    <div class="user-input-wrp">
                            <label>Personal site or portfolio</label>
                            <input value={personal} onChange={handlePersonal} placeholder="https://" />
                    </div>
                    {/* <div class="user-input-wrp">
                            <label>Email</label>
                            <span>Your email for marketplace notifications</span>
                            <input v-model="email" placeholder="Email" />
                             <span>You must sign message to view or manage your email. Sign message</span>  
                    </div> */}
                    {/* <div class="verified">
                        <div class="user-input-wrp" v-if="verified == 0">
                            <label>Verification</label>
                            <span>Proceed with verification process to get more visibility and gain trust on YukoPad.com Marketplace. Please allow up to several weeks for the process.</span>
                        </div>
                        <div class="btn-verified" >
                            
                            <button v-if="verified == 1"  >Get Verified</button>
                        </div>
                    </div> */}
                    <div class="update-profile-btn">
                        <button onClick={handleSubmit} className="" >Update Profile</button>
                    </div>
                </div>
		</div>
        </div>
    </section>

    
   <Modal isOpen={modal} toggle={toggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4" >Transaction is Processing...</div>      

   </ModalBody>
   <Button className="depositButton mr-auto ml-auto mb-5" onClick={toggle}>Close</Button>
    
 </Modal>
 <Modal isOpen={apiModal} toggle={apiToggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4 pb-3" >Saving Media... <br />Do not Close Tab/Window or reload</div>      

   </ModalBody>
 
 </Modal>

 
 <Modal isOpen={successModal} toggle={successToggle}  centered={true}>
   
        
   <ModalBody>
   <div className="modaltext text-center mt-4 pb-3" >Transaction Successfull.</div>      

   </ModalBody>
   <Button className="depositButton mr-auto ml-auto mb-5" onClick={successToggle}>Close</Button>
 
 </Modal>

 <Footer />
			</div>
		);
 

}
export default Profile;