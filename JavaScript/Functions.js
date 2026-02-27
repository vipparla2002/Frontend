// const fifthPower = (x) => x**5;

// let num = 1;
// while(num<10)
// {
//     console.log(num +"**5"+ " --> " +fifthPower(num));
//     num++
// }

function nthPower(base,exponent)
{

switch(exponent)
{
    case 1 :
        console.log(base)
        break
    case 2 :
        console.log(base**2)
        break
    case 3 :
        console.log(base**3)
        break
    case 4 :
        console.log(base**4)
        break
    case 5 :
        console.log(base**5)
        break
    default:
            console.log("Exponent not supported");
};
}


nthPower(99,33)

