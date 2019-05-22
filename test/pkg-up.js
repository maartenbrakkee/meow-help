"use strict";

import test from "ava";
import returnPackageUp from "./../dist/pkg-up";

test("return object returnPackageUp", t => {
  const pkg = returnPackageUp(null);
  t.deepEqual(pkg, {});
});
