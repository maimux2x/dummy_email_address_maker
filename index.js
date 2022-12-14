import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export class dummyEmailAddressMaker {
  constructor() {
    this.dummyDomain = "example.com";
  }

  createRandom() {
    let result = "";
    const availableChar =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charCount = 10;
    const charsLength = availableChar.length;
    for (let i = 0; i < charCount; i++) {
      result += availableChar.charAt(Math.floor(Math.random() * charsLength));
    }
    console.log(`Here dummy e-mail address: ${result}@${this.dummyDomain}`);
  }

  createCustom() {
    (async () => {
      const rl = readline.createInterface({ input, output });

      const answer = await rl.question(
        "Making dummy e-mail address! Please input one word! "
      );
      const prefix = "test";
      console.log(
        `Here dummy e-mail address: ${prefix}-${answer}@${this.dummyDomain}`
      );

      rl.close();
    })();
  }
}
