import fetch from "node-fetch";

export default async function handler(request, response) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${request.query.query}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();
  return response.status(200).json({ data });
}
