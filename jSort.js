(function(global, factory){
    factory(global);
})( typeof window !== "undefined" ? window : this, function(global){

    var jSort = {};

    //快排
    function QuickSortCore (data, min, max){
        if(data && data.length > 0){
            var temp = 0, i = min, j = max;
            var line = parseInt((max - min + 1)/2) + min;
            var val = data[line];
            while(i < j) {
                if(data[i] < val)
                {
                    if(i < j){
                        i++;
                    }
                    else{
                        break;
                    }
                }

                if(data[j] > val){
                    if(j > i){
                        j--;
                    }
                    else{
                        break;
                    }
                }

                if (i != j && data[i] >= val && data[j] <= val) {
                    temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
            }


            if(min < i-1){
                QuickSort(data, min, i-1);
            }

            if(max > i+1){
                QuickSort(data, i+1,max);
            }
        }
    }

    jSort.QuickSort = function(data){
          if(data && data.length > 0){
              QuickSortCore(data, 0, data.length-1);
              return data;
          }
          else {
              return data;
          }
    }

    //冒泡
    jSort.BubbleSort = function (data){
        if(data){
            var temp;
            for(var i = 0; i < data.length; i++){

                for(var j = i; j < data.length; j++){
                    if(data[i] > data[j]){
                        temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
        }
        else{
            return data;
        }
    }

    //归并
    jSort.MergeSort = function (data){
        if(data && data.length > 0){
            if(data.length === 1){
                return data;
            }
            else{
                var line = parseInt(data.length/2);
                var leftArry = MergeSort(data.slice(0,line));
                var rightArry = MergeSort(data.slice(line));

                var length = leftArry.length + rightArry.length;
                var arry = [];
                var i = 0, j = 0;
                for(var k = 0; k < length; k++){
                    if(leftArry.length > i && rightArry.length > j){
                        if(leftArry[i] < rightArry[j]){
                            arry.push(leftArry[i]);
                            i++;
                        }
                        else{
                            arry.push(rightArry[j]);
                            j++;
                        }
                    }
                    else{
                        if(leftArry.length <= i){
                            arry.push(rightArry[j]);
                            j++
                        }
                        else{
                            arry.push(leftArry[i]);
                            i++
                        }
                    }
                }
                return arry;
            }
        }
    }

    global.jSort = jSort;
})
