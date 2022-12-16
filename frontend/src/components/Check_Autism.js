import React, { useState } from 'react'
import axios from 'axios';

let count = 0;
function Check_Autism() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  function handelClick(event) {
    console.log(event.target.value);
    axios.get(`http://127.0.0.1:8000/api/inputquestions/${event.target.value}`)
      .then(response => {
        console.log("Getting from ::::", response.data)
        setData(response.data)
      }).catch(err => console.log(err));

  }
   function handelClick1(event){
    console.log(event.target.value)
    if(event.target.value==='yes'){
      count++;
      console.log(count);
    }
    if(count>=5){
      setShow(false);
    }
   }
  const arr = data.map((data) => {
    return (
      <>
        <p className='ques1'>{data.question}</p>
        <select class="form-select" aria-label="Default select example" onClick={(e) => (handelClick1(e))}>
        <option selected>Choose Your Answer</option>
        <option value="yes">Yes</option>
        <option value="No">No</option>
      </select>
      </>
    )
  })
  return (
    <div>
      <p className='para1'>Choose The Age of Your Child</p>
      <form className='select1'>
        <select class="form-select" aria-label="Default select example" onClick={(e) => (handelClick(e))}>
        <option selected>Choose the age</option>
          <option value="forlessthan1year">Less than One</option>
          <option value="for1to2year">One to Two</option>
          <option value="for2to10years">Two to Ten</option>
          <option value="for10to18years">Ten to Seventeen</option>
          <option value="for18years">Eignteen and Above</option>
          <option value="forgirls">For Girls</option>
        </select>
      </form>
      {show && <div className='arr'>{arr}</div>}
      {!show &&<div >You have Autism</div>}
    </div>
  );
}

export default Check_Autism
