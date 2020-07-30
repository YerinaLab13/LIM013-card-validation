const validator = {
  // ...
  isValid: function (creditCardNumber) {
  
    // let suma = 0;
    //for(let i=0 ; i<creditCardNumber.length ; i++){



    const cadena = creditCardNumber.toString();
    const longitud = cadena.length;
    let cifra = null;
    let cifra_cad = null;
    let suma = 0;

    for (let i = 0; i < longitud; i += 2) {
      cifra = parseInt(cadena.charAt(i)) * 2;
      if (cifra > 9) {
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad.charAt(0)) + parseInt(cifra_cad.charAt(1));
      }
      suma += cifra;
    }
    for (let i = 1; i < longitud; i += 2) {
      suma += parseInt(cadena.charAt(i));
    }

    if (suma % 10 == 0) {
      return true;
    } else {
      return false;
    }
  }


   /* let suma = 0;
    for (let i= 0 ; i< creditCardNumber.length; i++ ) {
      let num = parseInt(creditCardNumber[i]);

      if ((i+1)%2 !== 0) {

        num = num*2;
        if (num>9){
          let num1 = parseInt(num/10);
          let num2 = num%10;
          num = num1+ num2;
        }

      }
      suma = suma+num;
    }
     if (suma%10==0){
       return true;
     }
     else{
       return false;
     }
    }*/
     


  ,maskify: function (creditCardNumber) {
    let maskify2 = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i <= creditCardNumber.length - 5) {
        maskify2 = maskify2 + "#";
      } else {
        maskify2 = maskify2 + creditCardNumber[i];
      }
     // console.log(maskify2);
    }
    return maskify2;
  },
};

export default validator;
