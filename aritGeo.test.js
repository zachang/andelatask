const aritGeotest = require("./aritGeo");
describe(" Geometric progression:", () => {

  it("should test if array is emtpy and throw an error", () =>{
    let res = aritGeotest.Arit([]);
    console.log(res);
    if(res == 0 && res !== "Arithmetic"){
      throw new Error(`${res}`);
    }

  });

});
