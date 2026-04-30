export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) { res.status(400).send('Missing code'); return; }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await response.json();
    const token = data.access_token;
    const provider = 'github';

    res.setHeader('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html><html><head><title>Authorizing...</title></head><body>
<script>
(function() {
  var token = ${JSON.stringify(token)};
  var provider = "github";
  var message = "authorization:" + provider + ":success:" + JSON.stringify({token: token, provider: provider});
  
  // Try postMessage first
  if (window.opener) {
    window.opener.postMessage(message, "https://portfolio-ownpitchs-projects.vercel.app");
    window.opener.postMessage(message, "*");
  }
  
  // Also store in localStorage as backup
  try { localStorage.setItem("netlify-cms-token", JSON.stringify({token: token, provider: provider})); } catch(e) {}
  
  document.body.innerHTML = "<p>Authorized! Closing...</p>";
  setTimeout(function() { window.close(); }, 2000);
})();
<\/script>
</body></html>`);
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
}
