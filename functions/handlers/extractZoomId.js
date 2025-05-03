module.exports = async (req, res) => {
  const { zoom_url } = req.body;
  const match = zoom_url.match(/\/j\/(\d+)/);
  if (!match) return res.status(400).send("Invalid Zoom URL");
  res.json({ meetingId: match[1] });
};