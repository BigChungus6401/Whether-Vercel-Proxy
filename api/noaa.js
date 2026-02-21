// Cooler Chat Code
export default async function handler(req, res) {
  const { endpoint, ...params } = req.query;

  if (!endpoint) {
    return res.status(400).json({ error: "Missing endpoint" });
  }

  const query = new URLSearchParams(params).toString();

  const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/${endpoint}?${query}`;

  const response = await fetch(url, {
    headers: {
      token: process.env.NOAA_TOKEN
    }
  });

  const data = await response;//.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  //res.status(200).json(data);
  res.status(200);
  res.send(data);
}
