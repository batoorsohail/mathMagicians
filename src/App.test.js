import calculate from "./logic/calculate";
import operate from "./logic/operate";

describe("Calculator", () => {
  test("return empty obj for AC", () => {
    const testObj= {
      total: 10,
      next: 5,
      operation: "-"
    }

    const returnObj= {
      total: null,
      next: null,
      operation: null
    }

    const buttonName = "AC";
    const obj = calculate(testObj, buttonName);
    expect(obj).toEqual(returnObj);
  })

  test("return result obj for = ", () => {
    const testObj= {
      total: 5,
      next: 3,
      operation: "+"
    }

    const response= operate(testObj.total, testObj.next, testObj.operation);
    const returnObj= {
      total: response,
      next: null,
      operation: null
    }

    const buttonName = "=";
    const obj = calculate(testObj, buttonName);
    expect(obj).toEqual(returnObj);
  })

  test("returns result obj for +/- with only 1 value", () => {
    const testObj = {
      total: 5,
      next: null,
      operation: null,
    };

    const res = (testObj.total * -1).toString();
    const retObj = {
      total: res,
      next: null,
      operation: null,
    };

    const buttonName = "+/-";
    const obj = calculate(testObj, buttonName);
    expect(obj).toEqual(retObj);
  });

  test("returns result obj for +/- with 2 values", () => {
    const testObj = {
      total: 5,
      next: 3,
      operation: null,
    };

    const res = (testObj.next * -1).toString();
    const retObj = {
      total: 5,
      next: res,
      operation: null,
    };

    const buttonName = "+/-";
    const obj = calculate(testObj, buttonName);
    expect(obj).toEqual(retObj);
  });
});

describe("Operate", () => {
  test("returns 10+15 = 25", () => {
    const numberOne = 10;
    const numberTwo = 15;
    const operation = "+";
    const result = operate(numberOne, numberTwo, operation)
    expect(result).toEqual("25");
  })

  test("returns 10-5 = 5", () => {
    const numberOne = 10;
    const numberTwo = 5;
    const operation = "-";
    const result = operate(numberOne, numberTwo, operation)
    expect(result).toEqual("5");
  })

  test("2x4 returns 8", () => {
    const numberOne = 2;
    const numberTwo = 4;
    const operation = "x";
    const result = operate(numberOne, numberTwo, operation)
    expect(result).toEqual("8");  
  })

  test("returns the expected division", () => {
    const numberOne = 10;
    const numberTwo = 0;
    const operation = "÷";
    const result = operate(numberOne, numberTwo, operation)
    if (numberTwo === 0) {
      expect(result).toEqual("Can't divide by 0.");
    }else {
      expect(result).toEqual("5");
    }
  })

  test("returns the expected mod", () => {
    const numberOne = 20;
    const numberTwo = 5;
    const operation = "%";
    const result = operate(numberOne, numberTwo, operation);
    if (numberTwo === 0) {
      expect(result).toEqual(`Can't find modulo as can't divide by 0.`);
    } else {
      expect(result).toEqual(`0`);
    }
  });
});