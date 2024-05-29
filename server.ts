import app from './app';

import env from './src/config/env';

app.listen(env.API_PORT, () => {
  console.log(env.URL_API);
});
