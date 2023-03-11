import React from 'react';
import { useTokenBalance, useContract, useAddress} from '@thirdweb-dev/react';

const Demo = () => {
    const contractAddress ='0x8C46929e7bba9c1978d69146f9480e1D9A75989C';
    const walletAddress = useAddress();
    const { contract } = useContract( contractAddress);
    const { data, isLoading, error} =useTokenBalance(contract,walletAddress);

    return(
        <div>
        <p>   
        Token balance: {data?.displayValue}
        </p> 
       </div>
    );
}

export default Demo;