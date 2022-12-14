const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  { //ERROR- the file should not be empty
    
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);

    const result = File.csvToJson(filePath);

    await rejects(result, rejection);
  }
  { //ERROR - the file should not be longer than 4 lines including headers
    
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);

    const result = File.csvToJson(filePath);

    await rejects(result, rejection);
  }
  { //ERROR - the file should have id, name, profession and age fields
    
    const filePath = "./mocks/invalid-header.csv";

    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE);

    const result = File.csvToJson(filePath);

    await rejects(result, rejection);
  }
  { // SUCESS - return CSV in JSON format
    
    const filePath = "./mocks/threeItems-valid.csv";

    const result = await File.csvToJson(filePath);

    const expected = [
      {
        name: "Erick Wendel",
        id: 123,
        profession: "Javascript Instrutor",
        birthDay: 1997,
      },
      {
        name: "André Reis",
        id: 321,
        profession: "Javascript Developer",
        birthDay: 2002,
      },
      {
        name: "Joaquin Santos",
        id: 231,
        profession: "Java Developer",
        birthDay: 1992,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
