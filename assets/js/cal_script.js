// global variable
var au = 4.8481e-6  //pc
var D = 101.5
// select all the buttons
const buttons = document.querySelectorAll('label');
buttons.value='Hiiii';
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');
display.value='HelloWorld';


// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});


function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;
  display.value='HelloWorld!';
  

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = 'gg';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}


//def au2arcsec (x)
//return x / ( D * np.pi /(180*3600   * au))
//def arcsec2au (x)
//     return  x * D * np.pi /(180*3600   * au)
//au=4.8481e-6  # pc
//D = 101.5  # pc


//Copyright 2003 Unit-conversion.info
function fix(v) {
    if (!isFinite(v))
        return "";
    if (v == 0)
        return "0";
    st = "" + v;
    epos = st.indexOf('E');
    if (epos == -1)
        epos = st.indexOf('e');
    sdigi = Math.log(Math.abs(v)) / Math.LN10;
    sdigif = Math.floor(sdigi);
    if (epos == -1) {
        adjust = Math.pow(10, sdigif - 12);
        faqs = Math.round(v / adjust);
        norst = "" + faqs;
        if (sdigif < 12) {
            adjust2 = Math.pow(10, 12 - sdigif);
            return ( faqs / adjust2) ;
        } else
            return ( faqs * adjust) ;
    } else {
        zo = v * Math.pow(10, 12 - sdigif);
        szo = String(Math.round(zo));
        inse = -1;
        if (szo.charAt(0) == '-')
            inse = 2;
        else
            inse = 1;
        rest = szo.substring(inse, szo.length);
        i = rest.length - 1;
        while (i >= 0 && rest.charAt(i) == '0')
            i--;
        rest = rest.substring(0, i + 1);
        rou = szo.substring(0, inse);
        if (rest.length > 0)
            rou += "." + rest;
        if (sdigif < 0)
            sa = rou + "E";
        else
            sa = rou + "E+";
        snow = sa + sdigif;
        vanow = Math.abs(parseFloat(snow));
        faqsvab = Math.abs(v);
        if (sdigif >= 0) {
            if (vanow > 5 * faqsvab)
                snow = sa + String(sdigif - 1);
            else if (vanow < faqsvab / 5)
                snow = sa + String(sdigif + 1);
        } else if (sdigif >= 0) {
            if (vanow > 5 * faqsvab)
                snow = sa + String(sdigif + 1);
            else if (vanow < faqsvab / 5)
                snow = sa + String(sdigif - 1);
        }
        vanow = parseFloat(snow);
        if (vanow > 1.1 * v || vanow < 0.9 * v)
            return v;
        else
            return snow;
    }
}
/*
function convert() {
    var myform = document.forms['cform'];
    w1 = myform.D1.options[myform.D1.selectedIndex].value;
    w2 = myform.D2.options[myform.D2.selectedIndex].value;
    faqsorg = factors[w2] / factors[w1];
    resfaqs = myform.T1.value * faqsorg;
    elm = document.getElementById("N1");
    elm2 = document.getElementById("N2");
    elm.innerHTML = gbrt[w1];
    elm2.innerHTML = gbrt[w2];
    if (isNaN(parseFloat(resfaqs)))
        myform.T2.value = "";
    else {
        myform.T2.value = fix(parseFloat(resfaqs)) + " ";
    }
    ;
    setcookies()
}
function convertval(key1, key2, val) {}
$(document).ready(function() {
    $('#form').submit(function(event) {
        update_data();
        $('html, body').animate({
            scrollTop: ($("#output"))
        }, 800);
        document.activeElement.blur();
        event.preventDefault();
    });
    $('#mainbody').on('click', function() {
        if ($('button.navbar-toggle').is(':visible') && $('a.dropdown-toggle').is(':visible')) {
            $('button.navbar-toggle').click();
        }
        ;
    });
});
*/