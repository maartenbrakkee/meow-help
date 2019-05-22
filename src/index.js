"use strict";

const chalk = require("chalk");
const returnPackageCommand = require("./pkg-cmd");
const Table = require("cli-table3");

const command = returnPackageCommand();

export default function meowHelp(flags, description = "") {
  let help = "";

  if (description !== "") {
    help += chalk`{bold.underline Description}\n\n${description}\n\n`;
  }

  help += chalk`{bold.underline Usage}\n\n{gray $} ${command} {green <input>} {yellow <options>}\n\n{bold.underline Options}\n\n`;

  let table = createTable();

  const flagKeys = Object.keys(flags);
  for (const flag of flagKeys) {
    let options = flags[flag];
    let alias = (typeof options.alias !== "undefined") ? `-${options.alias}, ` : "";
    let defaultValue = "";
    let defaultText = "Defaults to";

    if (typeof options.default !== "undefined") {
      defaultValue = ` ${defaultText} ${chalk.cyan(`"${options.default}"`)}.`;
    } else if (options.type === "boolean") {
      defaultValue = ` ${defaultText} ${chalk.cyan("false")}.`;
    }

    table.push(
      [chalk`{yellow ${alias}--${flag}}`, `${options.description}${defaultValue}`]
    );
  }

  help += table.toString();

  return help;
}

function createTable() {
  return new Table({
    chars: {
      "top": "", "top-mid": "", "top-left": "", "top-right": "",
      "bottom": "", "bottom-mid": "", "bottom-left": "", "bottom-right": "",
      "left": "", "left-mid": "", "mid": "", "mid-mid": "",
      "right": "", "right-mid": "", "middle": ""
    },
    style: {
      "padding-left": 0,
      "padding-right": 2
    },
    wordWrap: true,
  });
}

module.exports = meowHelp;
