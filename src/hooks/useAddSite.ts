import { useSiteCatalogContract } from "src/hooks/useSiteCatalogContract";
import { useWeb3 } from "src/hooks/useWeb3";
import { useAppDispatch } from "src/redux/store";
import { web3SliceActions } from "src/redux/web3Slice";

export function useAddSite(): ((name: string) => Promise<unknown>) | null
{
  const web3 = useWeb3()
  const contract = useSiteCatalogContract();
  const dispatch = useAppDispatch();
  if (!contract || !web3)
  {
    return null;
  }

  return (name: string) =>
    web3.eth.getAccounts().then((accounts: string[]) =>
    //@ts-ignore
      contract.methods.addSite(name).send({
        from: accounts[0],
      }).then(() => dispatch(web3SliceActions.setIsSitesActual(false)))
    );

}