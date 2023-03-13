import { useAddress, useContractRead, useContract } from '@thirdweb-dev/react'
import ethers from 'ethers'


const Earned = () => {
    const address = useAddress();
    const contractAddress = '0x38076257254c71388583dfC0C24804df4Bb12818';
    const { contract } = useContract(contractAddress);
    const { data, isLoading, error } = useContractRead(contract,'earned', address || "0" );
    const formattedData = data/1000000000000000000;
    
  return ( 
    <div className="pb-2 font-medium text-slate-700">
    Reward Earned: {formattedData?.toString()}
    </div>
  )
}

export default Earned