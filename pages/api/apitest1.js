export default async function handler(req, res) {
  if (req.method === "POST") {
      const { username } = req.body;
      res.status(200).json({ message: `Hello, ${username}!` });
  } else {
      res.status(405).json({ error: "Method Not Allowed" });
  }
}