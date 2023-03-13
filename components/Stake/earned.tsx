import { useAddress, useContractRead, useContract } from '@thirdweb-dev/react'


const Earned = () => {
    const address = useAddress();
    const contractAddress = '0x38076257254c71388583dfC0C24804df4Bb12818';
    const { contract } = useContract(contractAddress);
    const { data, isLoading, error } = useContractRead(contract,'balanceOf', address || "0" );
    
  return (
    <div className="text-white">
    Amount Staked: {data?.displayValue}
    </div>
  )
}

export default Earned