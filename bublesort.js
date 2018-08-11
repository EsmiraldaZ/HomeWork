var arr = [1, 9, 3, 7, 2, 8, 4, 6, 0, 5];
var sort = arr.length;
var temp;
for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr.length; j++ ){
                if(arr[j] > arr[j+1]){
                    temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr);
