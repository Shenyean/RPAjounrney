// //async function main() {
//     const password1 = "P@ssw0rd1234";
//    // console.log ('fish')
//   for (let i = 4601 ;i<=4800;i+=4){
//     const userEmail = `loadtestuser${String(i).padStart(6,'0')}@mail.com`

//     console.log('leader '+userEmail)
//     for (let j = 1; j<=3;j++){
//       const learnerEmail = `loadtestuser${String(i+j).padStart(6,'0')}@mail.com`
//       console.log("learner "+learnerEmail)
//     }

//   }
// //}
let learnerList = [];
for (let i = 447; i <= 496; i++) {
  // add student 000001 -000050 in first class
  let y = i - 447;

  for (let j = 1; j <= 92; j++) {
    const userEmail = `A9-20${String(y * 92 + j).padStart(4, "0")}@area9.dk`;
    //console.log(userEmail);
    learnerList.push(userEmail);
  }

  console.log(JSON.stringify(learnerList));
  learnerList = [];
}
