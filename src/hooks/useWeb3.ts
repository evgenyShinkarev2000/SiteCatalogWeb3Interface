import { useContext } from "react";
import { Web3Context } from "src/providers/Web3Provider";
import { Web3 } from "web3";

export function useWeb3(): Web3 | undefined
{
  return useContext(Web3Context).web3;
}