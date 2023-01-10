export default async function (context) {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const asd = await response.json();
  context.store.commit('client/setSentenceChuck', asd.value);
}