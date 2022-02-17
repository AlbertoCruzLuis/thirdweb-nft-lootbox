import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xFC86E56302670F4c15C46E7987aebF0E2fF88c36';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}