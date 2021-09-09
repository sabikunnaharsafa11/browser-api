console.log('i am here');
// alert('ma is coming');
const maComing = () => {
    alert('Ammu is coming open the book');
}


const askPicnic = () => {
   const responce = confirm('are you going to picnic');
   console.log(responce);

   if(responce === true){
       alert ('amake fee ta bkash kore dey');
   }
   else{
       console.log('door e giya more');
   }
}

const askName = () =>{
  const name = prompt('what is yours name');
  if(name){
      console.log(name)
  }
}