import Router from 'express';
import nftController from './nftController';



const router = Router() 

router.get('/discover', nftController.getDiscover)

router.get('/nfts/:id',  nftController.getNft)

export default router;