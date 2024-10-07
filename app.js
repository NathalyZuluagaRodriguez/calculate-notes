
// const buttonGreat = document.querySelector('#buttonGreat');

// buttonGreat.addEventListener('click', great);


// function great(){
//    //capturar valor de la variable
//   alert( "hola "+username.value)
    
// }

// great()

const username= document.getElementById('nombre');

const nota1=document.getElementById('nota1');
const nota2=document.getElementById('nota2');
const nota3=document.getElementById('nota3');


const buttonCalcular=document.querySelector('#calculatorButton');
const buttonPrede=document.querySelector('#buttonPrede');

const result=document.getElementById('resultado');

buttonCalcular.addEventListener('click', calculateNote);
buttonPrede.addEventListener('click', predecirNote);



function calculateNote(event){

    event.preventDefault()

    let data1=  parseFloat(nota1.value); // cambiar el tipo de dato string -> float
    let data2=  parseFloat(nota2.value);
    let data3=  parseFloat(nota3.value);
    // tipo de dato ----  console.log(typeof not1);
    
    let resultado =((data1*0.3)+(data2*0.3)+(data3*0.4)).toFixed(2);

    // result.style.color='violet'
    // result.textContent = `SR/SRA/SRE${username.value} su nota definitiva es ${resultado}`;

    if(resultado<3.5){
        result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es ${resultado}, usted ha perdido la materia`;

    }else if(resultado>=3.5 && resultado<=4.5){
        result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es ${resultado}, usted ganó la materia`;
        result.style.color='orange';

    }else if(resultado>4.5){
        result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es ${resultado}, su nota es sobresaliente`;
        result.style.color='green';


    }

    
}

function predecirNote(event){
    event.preventDefault()

    let note1=  parseFloat(nota1.value); // cambiar el tipo de dato string -> float
    let note2=  parseFloat(nota2.value);

    let resultado = ((3.5 - (note1 * 0.3) - (note2 * 0.3)) / 0.4).toFixed(2);


    nota3.value=resultado;

 

}