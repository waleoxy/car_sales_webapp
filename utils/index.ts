export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "23cbb52bd8mshf5ff514f476ccffp1ea221jsnb987835453a1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
