// javascript is synchronous, single threaded by defalult;

// blocking code : block the flow of program, ex: aap wait kro ya movie pause kro, main chai bna kr lata hu
                            // ex: read file system, isme hm context kernel ko de dete hai, kernel file read krke hmare program ko deta hia
                            // to is bich me hmara program ruk jata hai,

//non-blocking code : don't block the flow of program, ex: tum aage movie rok ke rkho, main chai bna kr aata hu
//

//stack hota h, process queue hota hai, priority queue v hota hai(async functions like fetch have more priority than other other async function like setTimeOut)

console.log(1)
setTimeout(()=>{
console.log('timeout',2)
},0)
console.log(3);
// output:
// 1
// 3        
// timeout 2

// time out 0 hone k badh v phle 3 output aaya because 




























