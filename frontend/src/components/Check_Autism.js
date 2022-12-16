import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Check_Autism() {
    function handelClick(event) {
        console.log(event.target.value);   
    }
    const submitRegistration = async () => {
       
        
            axios.get("")
                .then(response => {
                    // setPeople(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        
  
 }

  return (
    <div>
      <form class="form-inline">
    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Choose The Age of Your Child</label>
    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onClick={(e)=>(handelClick(e))}>
    <option value="1">Less than One</option>
    <option value="2">One to Two</option>
    <option value="3">Two to Ten</option>
    <option value="4">Ten to Seventeen</option>
    <option value="5">Eignteen and Above</option>
    <option value="6">For Girls</option>
  </select>
  <button type="submit" class="btn btn-primary my-1"  onClick={submitRegistration()}>Submit</button>
</form>
    </div>
  );
}

export default Check_Autism
