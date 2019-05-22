"use strict";

import test from "ava";
import returnPackageCommand from "./../dist/pkg-cmd";

test("return object returnPackageCommand", t => {
  const pkg = {
    bin: {
      "test": "./test/code.js"
    }
  };
  const command = returnPackageCommand(pkg);
  t.is(command, "test");
});

test("return object returnPackageCommand no parent package", t => {
  const command = returnPackageCommand({});
  t.is(command, "meow-help");
});
