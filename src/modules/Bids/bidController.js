
import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler';
import { Bid} from '../../database/models'

import moment  from 'moment';
class BidController { 

    static async getBids(req,res) {
        try {

            const allBids = await Bid.findAll({where:{userID:req.params.id}})

            console.log(allBids)
            
            return responseHandler(res,"NFT loaded",200,allBids)
        } catch (error) {
            console.log(error.message)
            errorHandler.handleError(error.message, 500, res)
        }
    }

    static async completeBid(req,res) {
        try {
            const dateBid = moment()
            const newBid = await Bid.create({
                userID:req.body.userID,
                nftID:req.body.nftID,
                AmountETH:req.body.AmountETH,
                isWinner:req.body.isWinner,
                DateBid:dateBid

            })
            return responseHandler(res,"NFT loaded",200,newBid)
        } catch (error) {
            errorHandler.handleError(error.message, 500, res)
        }
    }
}

export default BidController