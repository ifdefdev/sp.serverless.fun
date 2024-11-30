export default async function handler(req, res) {
  // Проверяем авторизационный токен
  if (req.headers['authorization'] !== `Bearer ${process.env.FUN_TOKEN}`) { 
      return res.status(401).end('Unauthorized');
  }

  if (req.method === "POST") {
      const { username } = req.body; // Получаем данные из тела запроса
      res.status(200).json({ message: `Hello, ${username}!` });
  } else {
      res.status(405).json({ error: "Method Not Allowed" });
  }
}