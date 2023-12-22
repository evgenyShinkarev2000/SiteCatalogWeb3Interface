import { useEffect, useReducer, useState } from "react";
import { useRerender } from "src/hooks/useRerender";
import { Web3 } from "web3";


let isLoading = false;
let web3: Web3;

export function useWeb3(): Web3 | undefined
{
  const rerender = useRerender();
  useEffect(() =>
  {
    if (web3 || isLoading)
    {
      return;
    }
    const loadCallback = () =>
    {
      isLoading = true;
      window.removeEventListener("load", loadCallback);
      const ethereum: any = (window as any).ethereum;
      if (!ethereum)
      {
        console.log("Coudn't find web3 provider");
        return;
      }
      web3 = new Web3(ethereum);
      ethereum.send('eth_requestAccounts').then((r: any) => {
        isLoading = false;
        rerender();
      })
    }

    window.addEventListener("load", loadCallback);
  }, [rerender]);

  return web3;
}