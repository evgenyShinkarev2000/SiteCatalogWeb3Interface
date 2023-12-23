import { useContext } from "react";
import { Contract } from "web3";
import { SiteCatalogContractContext } from './../providers/SiteCatalogContractProvider';

export function useSiteCatalogContract(): Contract<any> | undefined
{
  return useContext(SiteCatalogContractContext).siteCatalogContract;
}