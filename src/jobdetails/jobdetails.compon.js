import { async } from "@firebase/util";
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { firebaseDatabase } from "../backend/firebase-handler.js";
import '../jobdetails/jobdetails.style.css';

const RecordData = () => {
    const [cData, setcData] = useState({
        name:"",
        post:"",
        package:"",
        Location:"",
        SSLCcutoff:"",
        PUCcutoff:"",
        semcutoff:"",
        currentCGPAcutoff:""
    })

    const handlerChange = (event) => {
        const { name, value} = event.target;
        setcData({
            ...cData,
            [name]: value
        })
    }
    const handleSave = async() => {
       const recordRef = ref(firebaseDatabase, `COMPANY_RECORDS/${cData.name}`);
       await set(recordRef, cData);
       alert("Data recorded!")
    }
    return (
            <div className="record-data1">
                <div className="record-data2">
                <h2>Enter the following details</h2>
                <label>Company Name:</label>  
                <input className="inputs" value={cData.name} onChange={handlerChange} name="name" placeholder="companyname" />
                    <label>Post:</label> 
                    <input className="inputs" value={cData.post} onChange={handlerChange} name="post" placeholder="post name" />
                    <label>Package:</label> 
                    <input className="inputs" value={cData.package} onChange={handlerChange} name="package" placeholder="package" type={'number'} />
                    <label>Location:</label> 
                    <input className="inputs" value={cData.Location} onChange={handlerChange} name="Location" placeholder="located" />
                    <label>SSLC Cut Off:</label>
                    <input className="inputs" value={cData.SSLCcutoff} onChange={handlerChange} name="SSLCcutoff" placeholder="in %" type={'number' } />
                    <label>PUC Cut Off:</label>
                    <input className="inputs" value={cData.PUCcutoff} onChange={handlerChange} name="PUCcutoff" placeholder="in % " type={'number'} />
                    <label>Semister Cut Off:</label>
                    <input className="inputs" value={cData.semcutoff} onChange={handlerChange} name="semcutoff" placeholder="Semister" type={'number'} />
                    <label>CGPA Cut Off:</label>
                    <input className="inputs" value={cData.currentCGPAcutoff} onChange={handlerChange} name="currentCGPAcutoff" placeholder="CGPA" type={'number'} />
                    <button className="SUBMIT" onClick={handleSave}>SUBMIT</button>
        
        </div>
        </div>

    )
}
export default RecordData;