export default async function () {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  return data;
}