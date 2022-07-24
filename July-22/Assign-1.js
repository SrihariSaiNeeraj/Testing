const a=50;
var i,fi,se,j;
for(i=1;i<Math.sqrt(a);i++)
{
    for(j=i+1;j<Math.sqrt(a);j++)
    {
    if(i*i+j*j==a)
    {
       fi=i;
       se=j;
       break;
    }
    }
}
console.log(fi,se);