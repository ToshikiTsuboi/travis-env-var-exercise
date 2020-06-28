const envtest = process.env.PROCESS_ENV_TEST;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log('PROCESS ENV is ${envtest}');
    await sleep(5000);
  }
}

main();
