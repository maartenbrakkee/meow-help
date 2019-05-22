import test from "ava";
import meowHelp from "./dist/index.js";

const chalk = require("chalk");

test("return object", t => {
  const flags = {
    rainbow: {
      type: "boolean",
      alias: "r",
      description: "Include a rainbow."
    }
  };
  const helpText = meowHelp(flags);

  t.is(helpText, chalk`{bold.underline Usage}\n\n{gray $} meow-help {green <input>} {yellow <options>}\n\n{bold.underline Options}\n\n{yellow -r, --rainbow}  Include a rainbow. Defaults to {cyan false}.  `);
});

test("return object with description", t => {
  const flags = {
    rainbow: {
      type: "string",
      alias: "r",
      description: "Include a rainbow."
    }
  };
  const helpText = meowHelp(flags, "This is a nice test description.");

  t.is(helpText, chalk`{bold.underline Description}\n\nThis is a nice test description.\n\n{bold.underline Usage}\n\n{gray $} meow-help {green <input>} {yellow <options>}\n\n{bold.underline Options}\n\n{yellow -r, --rainbow}  Include a rainbow.  `);
});
