const config   = require('config');

const client = process.env.GOOGLE_CLIENT_ID      || config.get('GOOGLE_CLIENT_ID');
const secret = process.env.GOOGLE_SECRET         || config.get('GOOGLE_SECRET');
const callback = process.env.GOOGLE_CALLBACK_URL || config.get('GOOGLE_CALLBACK_URL');