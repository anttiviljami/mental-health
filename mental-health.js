#!/usr/bin/env node

const chalk = require('chalk');
const { rando } = require('@nastyox/rando.js');

const COLORS = [
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "blackBright",
  "redBright",
  "greenBright",
  "yellowBright",
  "blueBright",
  "magentaBright",
  "cyanBright",
  "whiteBright",
]
const PROMPTS = [
  "Remember to take breaks!",
  "When did you last step away from the keyboard and take a break?",
  "You should treat yourself to a break!",
  "You should treat yourself to a healthy snack!",
  "Time for a coffee! ☕",
  "Coffee break! ☕",
  "Did you sleep well?",
  "You're doing great!",
  "All problems have solutions!",
  "Stuck? Try asking someone for help, they'll appreciate it!",
  "Take a few seconds to stand up and stretch your body",
  "Anything is possible!",
  "Smiling tricks your brain to reduce stress - try it!",
  "It's nice outside. Treat yourself to a walk!",
  "Taking a deep breath helps you focus",
  "You're good at what you do!",
  "Did you read any good books lately?",
  "Your code is beautiful!",
  "Give break to your eyes by looking at something far away",
  "Get some fresh air!",
  "Are you hydrated?",
  "Ice cream break? 🍦",
  "Let's watch a cat video! 🐈",
  "How's your posture?"
];

function main() {
  const prompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)]
  
  console.log(chalk[rando(COLORS).value].bold('♥') + ':', prompt)
}

if (require.main === module || ['postinstall'].includes(process.env.npm_lifecycle_event)) {
  main();
}

module.exports = {
  main,
  PROMPTS,
}