"use strict";

require("core-js/modules/es.symbol.description");

const chalk = require("chalk");

const normalizePackageData = require("normalize-package-data");

const path = require("path");

const readPkgUp = require("read-pkg-up");

const Table = require("cli-table3"); // Prevent caching of this module so module.parent is always accurate


delete require.cache[__filename];
const parentDir = path.dirname(module.parent.filename);

function meowHelp(flags, description = "") {
  let help = "";
  let pkg = readPkgUp.sync({
    cwd: parentDir,
    normalize: false
  }).package || {};
  normalizePackageData(pkg);
  let command = typeof pkg.bin !== "undefined" ? Object.keys(pkg.bin)[0] : "meow-help";

  if (description !== "") {
    help += chalk`{bold.underline Description}\n\n${description}\n\n`;
  }

  help += chalk`{bold.underline Usage}\n\n{gray $} ${command} {green <input>} {yellow <options>}\n\n{bold.underline Options}\n\n`;
  let table = createTable();

  for (var flag in flags) {
    if (flags.hasOwnProperty(flag)) {
      let options = flags[flag];
      let alias = typeof options.alias !== "undefined" ? `-${options.alias}, ` : "";
      let defaultValue = "";
      let defaultText = "Defaults to";

      if (typeof options.default !== "undefined") {
        defaultValue = ` ${defaultText} ${chalk.cyan(`"${options.default}"`)}.`;
      } else if (options.type === "boolean") {
        defaultValue = ` ${defaultText} ${chalk.cyan("false")}.`;
      }

      table.push([chalk`{yellow ${alias}--${flag}}`, `${options.description}${defaultValue}`]);
    }
  }

  help += table.toString();
  return help;
}

function createTable() {
  return new Table({
    chars: {
      "top": "",
      "top-mid": "",
      "top-left": "",
      "top-right": "",
      "bottom": "",
      "bottom-mid": "",
      "bottom-left": "",
      "bottom-right": "",
      "left": "",
      "left-mid": "",
      "mid": "",
      "mid-mid": "",
      "right": "",
      "right-mid": "",
      "middle": ""
    },
    style: {
      "padding-left": 0,
      "padding-right": 2
    },
    wordWrap: true
  });
}

module.exports = meowHelp;