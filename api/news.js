export default async function handler(req, res) {
  const { q, category, country, page, pageSize } = req.query;
  const apiKey = '6ba4369e026f482f99b3653b9e9d4fe4';

  let url;
  if (q) {
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&apiKey=${apiKey}&page=${page || 1}&pageSize=${pageSize || 8}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=${country || 'us'}&category=${category || 'general'}&apiKey=${apiKey}&page=${page || 1}&pageSize=${pageSize || 8}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news data' });
  }
}
