var a=[1,2,3,4,5,6,7];
let item=5;
let bool,min,max,mid;

while(max<=min){
    mid=max-min/2;
    if(a[mid]==item){
        bool=true;
    }else{
        if(a[mid]>item){
            min=mid;
        }
        if(a[mid]<item){
            max=mid;
        }else{
            bool=false;
        }
    }

}
console.log("val",bool);