const presets = [
  [
    "@babel/env",
    {
      useBuiltIns: "usage",
      corejs: 3,
      targets: {
        node: "10.15"
      }
    },
  ],
];

module.exports = { presets };
