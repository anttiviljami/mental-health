#!/usr/bin/env node

const chalk = require('chalk');

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
];

function main() {
  const prompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)]
  
  console.log(chalk.magentaBright.bold('♥') + ':', prompt)
}

if (require.main === module || ['postinstall'].includes(process.env.npm_lifecycle_event)) {
  main();
}

module.exports = {
  main,
  PROMPTS,
}