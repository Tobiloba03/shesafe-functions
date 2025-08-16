// api/missed-checkin.js
// CommonJS export — works without needing "type":"module"
module.exports = (req, res) => {
  try {
    const now = new Date().toISOString();

    if (req.method === "GET") {
      return res.status(200).json({
        ok: true,
        message: "Missed-checkin endpoint is alive",
        time: now,
        path: "/api/missed-checkin",
      });
    }

    if (req.method === "POST") {
      const body = req.body || {};
      // Here you would run real logic: query Firestore, send SMS, etc.
      // For now return what was posted so you can test.
      return res.status(200).json({
        ok: true,
        message: "Escalation simulated",
        received: body,
        time: now,
      });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).end("Method Not Allowed");
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ ok: false, error: String(err) });
  }
};
