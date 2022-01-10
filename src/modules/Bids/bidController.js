
import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler';
import { Bid} from '../../database/models'
class BidController { 

    static async getBids(req,res) {
        try {
            const allBids = Bid.findAll({where:{userID:req.params.id}})
            return responseHandler(res,"NFT loaded",200,allBids)
        } catch (error) {
            errorHandler.handleError(error.message, 500, res)
        }
    }

    static async completeBid(req,res) {
        try {
            const newBid = Bids.create({
                userID:req.body.userID,
                nftID:req.body.nftID,
                AmountETH:req.body.AmountETh,
            })
            return responseHandler(res,"NFT loaded",200,newBid)
        } catch (error) {
            errorHandler.handleError(error.message, 500, res)
        }
    }
}

export default BidController