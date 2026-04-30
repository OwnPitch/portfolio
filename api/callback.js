export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    res.status(400).send('Missing code parameter');
    return;
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });

    const data = await response.json();
    const token = data.access_token;
    const provider = 'github';
    const message = `authorization:${provider}:success:${JSON.stringify({token, provider})}`;

    res.setHeader('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
<html>
<head><title>Authorizing...</title></head>
<body>
<p id="status">Authorizing...</p>
<script>
(function() {
  var message = ${JSON.stringify(message)};
  var status = document.getElementById('status');
  
  if (!window.opener) {
    status.textContent = 'ERROR: window.opener is null. Token: ' + ${JSON.stringify(token ? 'OK' : 'MISSING')};
    return;
  }
  
  status.textContent = 'Sending token to parent window...';
  window.opener.postMessage(message, '*');
  status.textContent = 'Done! Closing...';
  setTimeout(function() { window.close(); }, 2000);
})();
</script>
</body>
</html>`);
  } catch (error) {
    res.status(500).send('OAuth error: ' + error.message);
  }
}
