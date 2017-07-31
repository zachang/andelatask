const {assert} = require("chai");
const aritGeotest = require("./aritGeo");

describe(" Arithmetic progression:", () => {

  it("should return 0 if array is emtpy", () =>{
      let res = aritGeotest.Arit([]);
      assert.equal(res, 0, `Not Empty Array`);
  });

  it("should return: Enter atleast 3 array index values, if array.length < 2", () =>{
      let res = aritGeotest.Arit([2,3]);
      assert.equal(res, "Enter atleast 3 array index values", `Array length > 2`);
  });

  it("should return -1 if not Arithmetic", () =>{
      let res = aritGeotest.Arit([2,4,5]);
      assert.equal(res, -1, `Arithmetic`);
  });

  it("should return Arithmetic", () =>{
      let res = aritGeotest.Arit([2,4,6]);
      assert.equal(res, 'Arithmetic', 'Not Arithmetic');
  });

  it("should return 'Not an array'", () =>{
      let res = aritGeotest.Arit("aaa");
      assert.equal(res, "Not an array");
  });

});

describe("Geometric progression:", () => {

  it("should return 0 if array is emtpy", () =>{
      let res = aritGeotest.Geop([]);
      assert.equal(res, 0, `Not Empty Array`);
  });

  it("should return: Enter atleast 3 array index values, if array.length < 2", () =>{
      let res = aritGeotest.Geop([2,3]);
      assert.equal(res, "Enter atleast 3 array index values", `Array length > 2`);
  });

  it("should return -1 if not Geometric", () =>{
      let res = aritGeotest.Geop([3,6,11]);
      assert.equal(res, -1, `Geometric`);
  });

  it("should return Geometric", () =>{
      let res = aritGeotest.Geop([2,4,8]);
      assert.equal(res, 'Geometric', 'Not Geometric');
  });

  it("should return 'Not an array'", () =>{
      let res = aritGeotest.Geop(1,1);
      assert.equal(res, "Not an array");
  });
});
