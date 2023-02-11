import { useState } from "react";
import dbdata from '../db.json';
import { useRouter } from "next/router";


export default function Home() {
  const routerdata=useRouter();


const [bdk_nme,setbdk_nme]=useState();

// setting and sort bankname 
let bankName_list=[];
dbdata.bankname.map((item) => {
  bankName_list.push(item.bankname.toUpperCase());
});
bankName_list = Array.from(new Set(bankName_list));
bankName_list.sort();
// need to remove above sort so all thing is static


// fn for handle change

function handleChange(e, name) {
  if (name === "bankname") {
    setbdk_nme();
    
    if (e.target.value === "Select Bank Name") {
      setbdk_nme();
    } else {
      setbdk_nme(e.target.value);
      routerdata.push(`/${e.target.value}`)
    }
  }

}

  return (
    <>
      <form className="container pt-3">
      <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="input_bankname">Select Bank Name</label>
            <div>
            <select name="input_bankname" id="Bank Name" className="form-select" aria-label="Default select example" onChange={(e)=>{handleChange(e,"bankname")}}>
              <option defaultValue="selected">Select Bank Name</option>
              {bankName_list.map((item) => {
                return (
                  <option key={item.replaceAll(" ", "_")} value={item.replaceAll(" ", "_")} style={{ overflowY: "auto", maxHeight: "238px", maxWidth: "50%" }}>
                    {/* <img src={`${staicbankurl}/Dena_Bank_Logo.png`} width="30" height="15" ></img> */}
                      {" "}{item.replaceAll("_", " ")}{" "}
                  </option>
                )
              })}
            </select>
            </div>
          </div>
      </div>
      </form>
    </>
  )
}
