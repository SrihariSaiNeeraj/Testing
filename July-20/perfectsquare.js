// let a=122;
// var flag=0;
// for(var i=1;i<=Math.sqrt(a);i++)
// {
//     if(a%i==0)
//     {
//         res=i;
//         if(res*res==a)
//         {
//             flag=1;
//         }
//     }
// }
// if(flag==1)
// console.log("Given number is a perfect square of "+res);
// else
// console.log("Given number is not a perfect square");

let a=100;
b=Math.sqrt(a);
f=Math.floor(b);
c=Math.ceil(b);
if((f*f==a) || (c*c==a)) 
    console.log("Perfect square");
else
    console.log("not");