const { writeFile } = require("fs");
const xml2js = require("xml2js");

class XML {
  static objectToXml(object) {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(object);
    writeFile("test.xml", xml, (err) => {
      console.log(err);
    });
  }
  static async toJSON(XML_DATA) {
    const data = await new xml2js.parseStringPromise(XML_DATA);
    writeFile("test.json", JSON.stringify(data), (err) => {
      console.log(err);
    });
    this.objectToXml(data)
  }
}

module.exports = XML;
