
const statsig = require('statsig-node');

async function main() {
  await statsig.initialize('secret-API-KEY');

  const user = { userID: '1' };
  const checker = async () => {
    const check = await statsig.checkGate(user, 'first_app_test');
    console.log(check ? 'passed' : 'failed');
  };

  setInterval(checker, 1000);
}
main();

