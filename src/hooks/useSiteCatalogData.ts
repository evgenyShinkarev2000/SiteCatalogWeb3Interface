import { CardProps } from "src/components/Card";
import { TagProps } from "src/components/Tag";
import { useSiteCatalogContract } from "src/hooks/useSiteCatalogContract";
import { useAppDispatch, useAppSelector } from "src/redux/store";
import { web3SliceActions } from "src/redux/web3Slice";

export function useSiteCatalogData(): CardProps[] | undefined
{
  const sites = useAppSelector(state => state.web3Slice.sites);
  const isSitesActual = useAppSelector(state => state.web3Slice.isSitesActual);
  const dispatch = useAppDispatch();
  const siteCatalogContract = useSiteCatalogContract();
  if (isSitesActual){
    return sites;
  }
  siteCatalogContract?.methods.getSites().call().then(r =>
  {
    let parsedSites: CardProps[];
    try
    {
      parsedSites = parseSites(r as string[]);
    }
    catch (e)
    {
      console.log("Can't parse response");
      console.log(r);
      console.log(e);
      return;
    }
    dispatch(web3SliceActions.setSites(parsedSites));
    dispatch(web3SliceActions.setIsSitesActual(true));
  });

  return sites;
}

function parseSites(sites: string[]): CardProps[]
{
  return sites.map(s =>
  {
    const siteTokens = s.split(";");
    const siteVotes = siteTokens[1].split(".").map(i => parseInt(i));
    return {
      name: siteTokens[0],
      positiveVoteCount: siteVotes[0],
      negativeVoteCount: siteVotes[1],
      tags: parseTags(siteTokens.slice(2)),
    } as CardProps;
  });
}

function parseTags(siteTagTokens: string[]): TagProps[]
{
  const tags: TagProps[] = [];
  for (let i = 0; i < siteTagTokens.length; i += 2)
  {
    const votes = siteTagTokens[i + 1].split(".").map(item => parseInt(item));
    tags.push({
      name: siteTagTokens[i],
      positiveVoteCount: votes[0],
      negativeVoteCount: votes[1],
    });
  }

  return tags;
}