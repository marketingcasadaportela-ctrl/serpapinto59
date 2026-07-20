const APPS_SCRIPT = 'https://script.google.com/macros/s/AKfycbyTbJn1JmENv-chmtgj3Wo8e1VvkKYGXEmjgwJslXWUcijEmFmdoNxqzYPgoTuTVke0/exec';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const resp = await fetch(APPS_SCRIPT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: event.body
    });
    const texto = await resp.text();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: texto
    };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ estado: 'erro' }) };
  }
};
