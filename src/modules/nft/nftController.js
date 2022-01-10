
import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler';
import { Nft , Artist} from '../../database/models'

class nftController { 
    static async getDiscover(req,res){
        try {
            const allNfts = await Nft.findAll({where:{isVisible:true}, include: Artist})
            return responseHandler(res,"NFT loaded",200,allNfts)
        } catch (error) {
            errorHandler.handleError(error.message, 500, res)
        }
    }

    static async getNft(req,res){
        try {
            const nftDetails = await Nft.findOne({where:{id:req.params.id}, include: Artist})
            return responseHandler(res,"NFT loaded",200,nftDetails)
        } catch (error) {
            errorHandler.handleError(error.message, 500, res)
        }
    }
}

export default nftController;
