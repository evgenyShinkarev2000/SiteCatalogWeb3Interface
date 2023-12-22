import { Contract, ContractAbi } from "web3";
import { useWeb3 } from "./useWeb3";
import contractAbi from "abi.json";

const contractAddress = "0xa188e6956e43bBd5028840a909db068A35e55944";

let contract: Contract<any>;

export function useSiteCatalogContract(): Contract<any> | undefined
{
  const web3 = useWeb3();
  if (contract)
  {
    return contract;
  }

  if (web3)
  {
    contract = new web3.eth.Contract(contractAbi, contractAddress);
  }

  return contract;
}