let a=[1,2,3,4,5,6,7,8,9,10];
console.log(Even());
function Even(){
    let i=0;
    while(i<a.length){
        if(i%2!=0){
            console.log(a[i]);
        }
        i++;
    }
}