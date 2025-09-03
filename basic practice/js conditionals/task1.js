///Free Drinks - Burger more than 500tk: free Coke - Else Coke: 30tk */

let burgerPrice = 550;
let cokePrice;

if (burgerPrice>500){
    cokePrice = 0;
    console.log("free drinks");
}else{ 
    cokePrice = 30;
    console.log("coke = 30 tk")
}console.log("Total Coke Price:", cokePrice, "tk");