// let array = [];

class AritGeo{

    Arit(array){
      if (array.length == 0) return "0";
      if (array.length <= 2 && array.length > 0) return "Enter atleast 3 array index values";

        let arr_aritGeo = -1;
        let a = array[1];
        let d = a - array[0];
        let i;

        for (i = 2; i < array.length; i++) {
               if ((a += d) == array[i]){
                   arr_aritGeo = "Arithmetic";
               }
               else {
                   arr_aritGeo;
                   break;
               }
           };
           return arr_aritGeo;
    }

    Geop(array){
      if (array.length == 0) return 0;
      if (array.length <= 2 && array.length > 0) return "Enter atleast 3 array index values";

          let arr_aritGeo = -1;
          let a = array[1];
          let r = a/array[0];
          let i;

          for (i = 2; i < array.length; i++) {
              if ((a *= r) == array[i]){
                  arr_aritGeo = "Geometric";
              }
              else{
                  arr_aritGeo;
                  break;
              }
          };
          return arr_aritGeo;
    }
}

const aritGeo = new AritGeo();
module.exports = aritGeo;
//console.log(typeof array);

// module.exports.aritGeo = (array) => {
//     if (array.length == 0) return "Array empty, Enter atleast 3 values";
//     if (array.length <= 2 && array.length > 0) return "Enter atleast 3 array index values";
//
//
//     let arr_aritGeo = -1;
//     let a = array[1];
//     let r = a/array[0];
//     let i;
//
//     for (i = 2; i < array.length; i++) {
//         if ((a *= r) == array[i]){
//             arr_aritGeo = "Geometric";
//         }
//         else{
//             arr_aritGeo;
//             break;
//         }
//     };
//
//     if (arr_aritGeo == "Geometric") return arr_aritGeo;
//
//     a = array[1];
//     let d = a - array[0];
//     i;
//
//     for (i = 2; i < array.length; i++) {
//         if ((a += d) == array[i]){
//             arr_aritGeo = "Arithmetic";
//         }
//         else {
//             arr_aritGeo;
//             break;
//         }
//     };
//     return arr_aritGeo;
// }

// console.log(module.exports.aritGeo([1,2,3]));
