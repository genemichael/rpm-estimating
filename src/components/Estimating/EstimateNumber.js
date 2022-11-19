import React, { useState } from 'react'


const EstimateNumber = () => {
    const [estimateNum, setEstimateNum] = useState();
    const getEstimateNumber = () => {
        google.script.run.withSuccessHandler(loadNumber).newEstimateNumber();
            alert("click");
          }
          function loadNumber(estimateNum) {
            document.getElementById("estNumber").value = "D" + newNumber;
            alert("D" + estimateNum);
    }
  return (
    "D"+{estimateNum}
  )
}

export default EstimateNumber