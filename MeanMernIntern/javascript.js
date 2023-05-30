function Prime(num){
    if(num<=1){
        console.log("Enter a valid num");
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i ===0){
            console.log("Not a Prime");
        }
        
    }
}
console.log(Prime(5));