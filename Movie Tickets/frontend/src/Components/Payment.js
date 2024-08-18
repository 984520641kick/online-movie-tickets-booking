import React from 'react';


function Payment() {

  return (
    <div>
      <axios/>
  <center> <h1>This is payment page
    
    </h1></center>
<center>

<div className='card'>

<div className='input'>
 <h4 id='green'>first name</h4>
 <h4 id='light'> last name</h4>

<input id='firstinput' type='text' placeholder='first name'></input>

<input id='lastinput' type='text' placeholder='last name'></input>

<h4 id='card-number'>card number</h4>
<h4 id='cv-number'>cv number</h4>

<input id='cardinput' type='text' placeholder='card number'></input>

<input id='cvvinput' type='text' placeholder='cvv number'></input>

<h4 id='month'>month</h4>
<h4 id='year'>year</h4>

<input id='monthinput' type='month' placeholder='month'></input>
<input id='yearinput'   type='year' placeholder='year'></input>

</div>
</div>
</center>
<center>
    <div className='payment-logo'>
        
        <a href ='phonepe'><img src={'phonepe.png'} alt='' width={50} ></img></a>
        <a href ='masstercard'><img src={'mastercard.png'} alt='' width={70} ></img></a>
        <a href ='paypal'><img src={'paypal.png'} alt='' width={50} ></img></a>
        <a href ='rupay'><img src={'rupay.png'} alt='' width={50} ></img></a>
        <a href ='visa'><img src={'visa.png'} alt='' width={50} ></img></a>
        <a href ='g-pay'><img src={'g-pay.jpg'} alt='' width={50} ></img></a>
        
    </div>

    <button id='cancel' type='cancel' onClick={""}>cancel</button>
    <button id='submit' type='submit' onClick={""}>submit</button>

    </center>
    </div>
  )
}

export default Payment;