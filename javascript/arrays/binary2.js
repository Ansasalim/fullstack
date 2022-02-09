var arr=[2,3,4,5]
var pairNum=9;
var low=0,upp=arr.length-1;flag=0;
while(low<=upp)
{
    let CurSum=arr[low]+arr[upp]
    if(CurSum==pairNum){
       flag=1;
       console.log(`pairs(${arr[low]},${arr[upp]})`);
       break;
    }
    // case 2
    else if(CurSum<pairNum){
        low++;
    }
    //  case 3
    else if

break;
    }
}