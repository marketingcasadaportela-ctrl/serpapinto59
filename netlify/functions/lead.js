const APPS_SCRIPT = 'https://script.google.com/macros/s/AKfycbyBX1TmG_AZ52-kJDdsCTYbF5hRGELPsysgFgZGjGce7CxzbBn99EUyn5KB9UfK_9Lo/exec';

exports.handler = async (event) => {
  const cabecalhos = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    'Pragma': 'no-cache'
  };

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cabecalhos, body: JSON.stringify({ estado: 'metodo' }) };
  }
  try {
    const resp = await fetch(APPS_SCRIPT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: event.body
    });
    const texto = await resp.text();
    return { statusCode: 200, headers: cabecalhos, body: texto };
  } catch (err) {
    return { statusCode: 502, headers: cabecalhos, body: JSON.stringify({ estado: 'erro' }) };
  }
};
