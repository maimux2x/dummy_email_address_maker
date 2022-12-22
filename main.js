#!/usr/bin/env node
import { dummyEmailAddressMaker } from "./DummyEmailAddressMaker.js";

const option = process.argv.slice(2);
const dummyEmailAddress = new dummyEmailAddressMaker();

if (option[0] === "-r") {
  dummyEmailAddress.createRandom();
} else if (option[0] === "-c") {
  dummyEmailAddress.createCustom();
} else if (option.length === 0) {
  dummyEmailAddress.createRandom();
}
