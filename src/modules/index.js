import auth from './auth';

import Bids from './Bids'
import nft from './nft'

const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, auth);
    app.use(apiPrefix, Bids);
    app.use(apiPrefix, nft);
    return app;
}

export default routes;