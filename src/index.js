import validator from './validator.js';
//console.log(validator);
    // const boton = document.getElementById("boton");
    // boton.addEventListener("click",() => {
    // let datos = document.getElementById("datos");
    // let numbercard = document.getElementById("number").Value;
    // console.log (numbercard);
    // });
    
    // document.getElementById("inicio").style.display = "none";
    // document.getElementById("datos").style.display = "block";

    
    const show = ()=>{
        document.getElementById("inicio").style.display = "none";
        document.getElementById("datos").style.display = "block";
    }
    document.getElementById("boton").addEventListener("click",show);

    document.getElementById("send").addEventListener("click", (event)=>{
        event.preventDefault()
        let numberCard = document.getElementById("numberCard").value;
        // console.log(numberCard);
        validator.isValid(numberCard);
        validator.maskify(numberCard);
    });
    



