
import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler';
import { Bid , User, Nft} from '../../database/models'

import moment  from 'moment';
import SendGridHelper from '../../helpers/sendGridHandler';
class BidController { 

    static async getBids(req,res) {
        try {

            const allBids = await Bid.findAll({where:{userID:req.params.id}})


            
            return responseHandler(res,"NFT loaded",200,allBids)
        } catch (error) {

            errorHandler.handleError(error.message, 500, res)
        }
    }

    static async getNftBids(req,res) {
        try {

            const allBids = await Bid.findAll({where:{nftID:req.params.id}, order:[
                ['updatedAt',"DESC"]
            ]})

            return responseHandler(res,"NFT loaded",200,allBids)
        } catch (error) {

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
            const user = await User.findByPk(req.body.userID);
            // console.log(user.dataValues.)
            const nft = await Nft.findByPk(req.body.nftID);
            await SendGridHelper.sendBidConfirmation(user.dataValues.Email, nft.dataValues.name, req.body.AmountETH , dateBid,nft.dataValues.EndDate)
            return responseHandler(res,"Your Bid has been submitted",200,newBid)
        } catch (error) {

            errorHandler.handleError(error.message, 500, res)
        }
    }
}

export default BidController