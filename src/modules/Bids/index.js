import Router from 'express';
import nftController from '../nft/nftController';
import BidController from './bidController';




const router = Router() 

router.get('/bids/:id',BidController.getBids)

router.post('/completeBid',  BidController.completeBid)

export default router;