// api/missed-checkin.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  // Simulate escalation logic
  const { userId, missedAt } = req.body;

  // For now, we just return a fake alert
  return res.status(200).json({
    status: "success",
    message: `Escalation triggered for user ${userId} who missed check-in at ${missedAt}`,
  });
}
