import { PropsWithChildren, createContext, useEffect, useMemo, useState } from "react";
import { Web3 } from "web3";

interface IWeb3Context
{
  web3?: Web3,
}

interface IWeb3ContextProvider
{
}

export const Web3Context = createContext<IWeb3Context>({});

export function Web3Provider(props: PropsWithChildren<IWeb3ContextProvider>)
{
  const [web3, setWeb3] = useState<Web3>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() =>
  {
    if (web3 || isLoading)
    {
      return;
    }
    const loadCallback = () =>
    {
      setIsLoading(true);
      window.removeEventListener("load", loadCallback);
      const ethereum: any = (window as any).ethereum;
      if (!ethereum)
      {
        console.log("Coudn't find web3 provider");
        return;
      }
      setWeb3(new Web3(ethereum));
      ethereum.send('eth_requestAccounts').then((r: any) =>
      {
        setIsLoading(false);
      })
    }

    window.addEventListener("load", loadCallback);
  }, [web3, isLoading]);

  const web3Context: IWeb3Context = useMemo(() => ({
    web3,
  }), [web3]);

  return <Web3Context.Provider value={web3Context}>
    {props.children}
  </Web3Context.Provider>
}
