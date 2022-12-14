#!/usr/bin/env node
import { dummyEmailAddressMaker } from "./index.js";

const option = process.argv.slice(2);
const dummyEmailAddress = new dummyEmailAddressMaker();

if (option[0] === "-r") {
  dummyEmailAddress.createRondom();
} else if (option[0] === "-c") {
  dummyEmailAddress.createCustom();
}
