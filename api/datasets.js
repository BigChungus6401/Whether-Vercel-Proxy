// Cool Chat code
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.ncei.noaa.gov/cdo-web/api/v2/",
      {
        headers: {
          token: process.env.NOAA_TOKEN
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "NOAA API error"
      });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Proxy failure" });
  }
}
