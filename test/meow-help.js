"use strict";

import test from "ava";
import meowHelp from "./../";

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

test("return object without alias", t => {
  const flags = {
    rainbow: {
      type: "string",
      description: "Include a rainbow."
    }
  };
  const helpText = meowHelp(flags);

  t.is(helpText, chalk`{bold.underline Usage}\n\n{gray $} meow-help {green <input>} {yellow <options>}\n\n{bold.underline Options}\n\n{yellow --rainbow}  Include a rainbow.  `);
});

test("return object without default", t => {
  const flags = {
    rainbow: {
      type: "string",
      default: "All the way!",
      description: "Include a rainbow."
    }
  };
  const helpText = meowHelp(flags);

  t.is(helpText, chalk`{bold.underline Usage}\n\n{gray $} meow-help {green <input>} {yellow <options>}\n\n{bold.underline Options}\n\n{yellow --rainbow}  Include a rainbow. Defaults to {cyan "All the way!"}.  `);
});
