function aritGeo(arr){
    let arr_aritGeo = -1;
    if (arr.length <= 2) return "Enter atleast 3 array index values";

    let a = arr[1];
    let r = a/arr[0];
    let i;

    for (i = 2; i < arr.length; i++) {
        if ((a *= r) == arr[i]){
            arr_aritGeo = "Geometric";
        }
        else{
            arr_aritGeo;
            break;
        }
    };

    if (arr_aritGeo == "Geometric") return arr_aritGeo;

    a = arr[1];
    let d = a - arr[0];
    i;

    for (i = 2; i < arr.length; i++) {
        if ((a += d) == arr[i]){
            arr_aritGeo = "Arithmetic";
        }
        else {
            arr_aritGeo;
            break;
        }
    };
    return arr_aritGeo;
}

console.log(aritGeo([3,9,27,81]));
