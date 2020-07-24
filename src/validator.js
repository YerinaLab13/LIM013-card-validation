const validator = {
  // ...
  isValid: function(num){
    console.log(num)
  },
  maskify:function(num){
    let maskify2 = '';
    for(let i=0 ; i < num.length ; i++){
      if(i <= num.length -5 ){
          maskify2 = maskify2 + '#';
      }else{
          maskify2 = maskify2 + num[i];
      }
        console.log(maskify2)
    }
      return maskify2
  }

};

export default validator;
