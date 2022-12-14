const { readFile } = require("fs/promises");
const { join } = require("path");
const { error } = require("./constants");
const User = require("./user");

const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};
class File {
  static async csvToJson(filePath) {
    const content = await File.getFileContent(filePath);

    const validation = File.isValid(content);

    if (!validation.valid) throw new Error(validation.error);

    return File.parseCSVToJSON(content);
  }
  static async getFileContent(filePath) {
    return (await readFile(filePath)).toString("utf8");
  }
  static isValid(csvString, options = DEFAULT_OPTION) {
    const [header, ...fileWithoudHeader] = csvString.trim().split(/\r?\n/);
    const isHeaderValid = header === options.fields.join(",");

    if (!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }
    const isContentLengthAcceped =
      fileWithoudHeader.length > 0 &&
      fileWithoudHeader.length <= options.maxLines;

    if (!isContentLengthAcceped) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }
    return { valid: true };
  }
  static parseCSVToJSON(csvString) {
    const CSV = csvString.split(/\n?\r/);
    const columns = CSV.shift().split(",");
    const JSON = CSV.map((line) => {
      const user = {};
      columns.forEach((column, index) => {
        let result = line.trim().split(/,/)[index];
        user[column] = result;
      });
      return new User(user);
    });

    return JSON;
  }
}
module.exports = File;
