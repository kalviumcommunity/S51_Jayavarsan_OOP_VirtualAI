import { useState, useRef } from "react";
import "../src/Styles/seller.css"
import rupees from "../src/assets/Rupees.png"
import NavBar from "./NavBar";

function SellerPage(){
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        console.log('Uploading file:', selectedFile);
        setSelectedFile(null);
      } else {
        alert('Please select a file first.');
      }
    };
    return(
        <div>
            < NavBar />
            <div id="left-top">
                <p>Home &gt; Sell on thrift</p>
            </div>
            <div className="seller">
                <div className="left-seller">
                    <div id="product-upload">
                        <div id="upload-top"><img src={rupees} alt="rupees" /><h1>Sell on Thrift</h1></div>
                        <div id="upload">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                            />
                            <img src="" alt="choose-image" />
                            <button onClick={() => fileInputRef.current.click()}>Choose File</button>
                        </div>
                        <p id="verify">*Only verified images or products allowed</p>
                    </div>
                    <div className="submit">
                        <div id="check-box">
                            <input type="checkbox" name="" /><label htmlFor="">I am Sure that my product has no physical damage</label><br/>
                            <input type="checkbox" name="" /><label htmlFor="">I accept Privacy policy and terms and condition</label><br/>
                        </div>    
                        <button id="publish" onClick={handleUpload}>Publish</button>  
                    </div>
                </div>
                <div className="right-seller">
                    <div id="head">
                        <h1>Sell your Products on Thrift</h1>
                        <p>Sell your products on thrift on our website</p>
                    </div>
                    <div id="inputs">
                        <div>
                            <p>Name of the product</p>
                            <input type="text" placeholder="eg: Peter England"/>
                        </div>
                        <div>
                            <p>Price</p>
                            <input type="text" placeholder="eg: 300"/>
                        </div>
                        <div>
                            <p>Description</p>
                            <input type="text" placeholder="eg: Peter England" id="desc"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerPage;