// Create a function to check if a number is Prime or Not

function prime(num){
 let count = 0;
 for(let i = 0; i<=num; i++)
   {
     if(num%i==0)
     {
       count++;
     }
   }
    if(count==2)
       {
         console.log(num + " Yes");
       }
      else
       {
         console.log(num +  " No");
       }
 }
 prime(7)
 // prime(10)
 // prime(13)
 // prime(17)