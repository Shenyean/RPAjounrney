//async function main() {
    const password1 = "P@ssw0rd1234";
   // console.log ('fish')
  for (let i = 4601 ;i<=4800;i+=4){
    const userEmail = `loadtestuser${String(i).padStart(6,'0')}@mail.com` 
     
    console.log('leader '+userEmail)
    for (let j = 1; j<=3;j++){
      const learnerEmail = `loadtestuser${String(i+j).padStart(6,'0')}@mail.com` 
      console.log("learner "+learnerEmail)
    }
    

  }
//}