import auth from './auth';

import Bids from './Bids';
import nft from './nft';
import SaleVoucher from './SaleVoucher';

const apiPrefix = '/api/v1';

const routes = app => {
  app.use(apiPrefix, auth);
  app.use(apiPrefix, Bids);
  app.use(apiPrefix, nft);
  app.use(apiPrefix, SaleVoucher);
  return app;
};

export default routes;
