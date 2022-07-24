var i;
for(i=0;i<=50;i++)
{
var k=i,rem,rev=0;
for(;k!=0;k=Math.floor(k/10))
{
   rem=k%10; 
   rev=rev*10+rem;
}
if(rev==i)
console.log(i);
}