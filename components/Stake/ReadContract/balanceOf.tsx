import { useAddress, useContractRead, useContract } from '@thirdweb-dev/react'
import ethers from 'ethers'


const BalanceOf = () => {
    const address = useAddress();
    const contractAddress = '0x1dd93d54A54A56761bdA2416B8429b64e19a7A03';
    const { contract } = useContract(contractAddress);
    const { data, isLoading, error } = useContractRead(contract,'balanceOf', address || "0" );
    const formattedData = data/1000000000000000000;
    
  return ( 
    <div className="pb-2 font-medium text-slate-700">
    Amount Staked: {formattedData?.toString()}
    </div>
  )
}

export default BalanceOf