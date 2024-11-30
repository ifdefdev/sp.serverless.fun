export default async function handler(req, res) {
  const username = req.query.username || "Guest";

  // Пример обработки данных
  res.status(200).json({ message: `Hello, ${username}!` });
}
