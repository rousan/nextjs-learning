export async function fetchUser() {
  const userData = await (await fetch("https://mocki.io/v1/6f2ad03d-cee6-4f95-82eb-356163e5b380")).json();
  return userData;
}