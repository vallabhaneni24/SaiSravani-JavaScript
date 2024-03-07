function findMinMax(numbers){
    if(numbers.length ===0){
        console.log("Array is empty");
        return;
    }

    let largest = numbers[0];
    let smallest = numbers[0];

    for (let i=0; i<numbers.length; i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
        if(numbers[i]<smallest){
            smallest = numbers[i];
        }
    }

    console.log("Largest numer: "+largest);
    console.log("Smallest number: "+smallest);
}

const intArray = [5,7,4,8,3,2,9];
findMinMax(intArray);