//Under development, not tested

function AuPcConverter(sourceArcsecond, sourceDistance, sourceAU) {

    // input_Distance = document.getElementById(sourceDistance).value;

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