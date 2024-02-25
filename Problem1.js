let set1 = [1,3,7,9];

let set2 = [1,2,3,4,9];

let num = 0;

let sum = 0;

let result = [];

for (i=0;i<set1.length;i++) {
    function checker1() {
        num = set1[i];
        for (j=0;j<set2.length;j++){
            if (num===set2[j]) {
                break;
            } 
            else if(j === set2.length-1){
                sum+=num;
                result+=num;
                console.log(num)
            }
        }
            
    }
    checker1();
}


for (i=0;i<set2.length;i++) {
    function checker2() {
        num = set2[i];
        for (j=0;j<set1.length;j++){
            if (num === set1[j]) {
                break;
            } 
            else if(j === set1.length-1){
                sum+=num;
                result+=num;
                console.log(num)
            }
        }
            
    }
    checker2();
}


console.log(sum);