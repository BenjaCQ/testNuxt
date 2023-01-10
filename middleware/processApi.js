export default async function (context) {
  for (let i = 0; i <= 2; i++) {
    const response2 = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response2.json();
    context.store.commit('client/setProcesses', data.value);
  }
}