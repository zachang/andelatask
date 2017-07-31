// let array = [];

class AritGeo{

    Arit(array){

      if (!(array instanceof Array)) return "Not an array";
      if (array.length == 0) return 0;
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
      if (!(array instanceof Array)) return "Not an array";
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
// console.log(aritGeo.Geop("aaa"));
module.exports = aritGeo;
