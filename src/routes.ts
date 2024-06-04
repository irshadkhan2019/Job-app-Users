import { verifyGatewayRequest } from '@irshadkhan2019/job-app-shared';
import { Application } from 'express';


const BUYER_BASE_PATH = '/api/v1/buyer';
const SELLER_BASE_PATH = '/api/v1/seller';

const appRoutes = (app: Application): void => {
  app.use('', ()=> console.log("health routes"));
  app.use(BUYER_BASE_PATH, verifyGatewayRequest, ()=> console.log("buyer routes"));
  app.use(SELLER_BASE_PATH, verifyGatewayRequest, ()=> console.log("seller routes"));
};

export { appRoutes };