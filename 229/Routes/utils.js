const fs = require("fs");
const { resolve } = require("path");

const getdata = (abs = "/data/user.txt") => {
  return new Promise(async (resolve, reject) => {
    await fs.readFile(abs, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const writedata = async (abs = "/data/user.txt", values = []) => {
  return new Promise(async (resolve, reject) => {
    const formatedData =Buffer.from(JSON.stringify(values))
    await fs.writeFile(abs, formatedData, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
};

module.exports = { getdata, writedata };
