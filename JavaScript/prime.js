function IsPrime(n){

    var isItPrime = true;

    for(var i = 2; i <= Math.sqrt(n); i++)
    {
        if(n%i==0){
            isItPrime = false;
            break
        }
    }
    //`${n} is a prime: ${isItPrime}\n ${i}`;
    return isItPrime
}




for(let i =1001 ;i<10000;i+=2){
    if(IsPrime(i)){
        console.log(i)
    }
}