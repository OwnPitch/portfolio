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
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await response.json();
    const token = data.access_token;

    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Authorizing...</title></head>
      <body>
        <script>
          (function() {
            const token = "${token}";
            const provider = "github";
            if (window.opener) {
              window.opener.postMessage(
                "authorization:" + provider + ":success:" + JSON.stringify({ token, provider }),
                "*"
              );
            }
            window.close();
          })();
        </script>
        <p>Authorization complete. You can close this window.</p>
      </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('OAuth error: ' + error.message);
  }
}
