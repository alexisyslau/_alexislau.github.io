---
permalink: /
title: Astronomical unit calculator
excerpt: ""
author_profile: true
redirect_from: 
  - /calculator/
---


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" type="text/css" href="../assets/css/cal_style.css">  -->
  <!-- calculator <link rel="stylesheet" type="text/css" href="../assets/css/cal_style.css"> -->
  
  <title>Astronomical Unit Converter</title>
  <body>
  
  <h2>Astronomical Unit Converter</h2>
  <p>Converting AU between arcsecond with a given distance</p>
  

  <p>
    <label>Arcsecond</label>
    <input id="inputArcsecond" type="number" placeholder="arcsecond" value=0>
  </p>

  <p>
    <label>Distance (pc)</label>
    <input id="inputDistance" type="number" placeholder="distance" value=0>
  </p>

  <p>
    <label>Astronomical Unit (au)</label>
    <input id="inputAU" type="number" placeholder="au" value=0>
    </p>

  <div id="result"></div>
  
  <input type="button" value="Calculate" 
  onclick="AuPcConverter(document.getElementById('inputArcsecond').value, 
  document.getElementById('inputDistance').value,
  document.getElementById('inputAU').value)"
  >


  <script>
  function AuPcConverter(input_arcsecond,input_Distance, input_AU) {

    var inputAU = document.getElementById('inputAU'); 
    var inputArcsecond = document.getElementById('inputArcsecond'); 

    au_in_pc = 4.8481e-6; //pc

    if (input_Distance !=0 && input_AU!=0){
      inputArcsecond.value = input_AU / (input_Distance*(Math.PI)/(180*3600*au_in_pc));
      // document.getElementById("result").innerHTML = 'Result: '+ input_AU / (input_Distance*(22/7)/(180*3600*au_in_pc));
    }
    if (input_Distance !=0 && input_arcsecond!=0){
      // document.getElementById("result").innerHTML = 'Result: '+input_arcsecond * input_Distance*(22/7)/(180*3600*au_in_pc);
      inputAU.value = input_arcsecond * input_Distance*(Math.PI)/(180*3600*au_in_pc);
    }
  }

  </script>
  
  </body>
</html>