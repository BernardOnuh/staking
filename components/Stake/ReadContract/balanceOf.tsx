import { useAddress, useContractRead, useContract } from '@thirdweb-dev/react'
import ethers from 'ethers'


const BalanceOf = () => {
    const address = useAddress();
    const contractAddress = '0x224e7d3f735D5893A91Dc73905f5c2722370518e';
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