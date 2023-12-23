import { PropsWithChildren, createContext, useMemo } from "react";
import { useWeb3 } from "src/hooks/useWeb3";
import { Contract } from "web3";
import contractAbi from "abi.json";

const contractAddress = "0xa188e6956e43bBd5028840a909db068A35e55944";

interface ISiteCatalogContractContext
{
  siteCatalogContract?: Contract<any>,
}

export const SiteCatalogContractContext = createContext<ISiteCatalogContractContext>({});

interface ISiteCatalogContextProviderProps
{

}

export function SiteCatalogContractProvider(props: PropsWithChildren<ISiteCatalogContextProviderProps>)
{
  const web3 = useWeb3();
  const siteCatalogContractContext: ISiteCatalogContractContext = useMemo(() =>
  {
    if (!web3)
    {
      return {}
    }
    return {
      siteCatalogContract: new web3.eth.Contract(contractAbi, contractAddress),
    }
  }, [web3]);

  return <SiteCatalogContractContext.Provider value={siteCatalogContractContext}>
    {props.children}
  </SiteCatalogContractContext.Provider>

}