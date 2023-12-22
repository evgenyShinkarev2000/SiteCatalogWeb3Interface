
import { useSiteCatalogData } from 'src/hooks/useSiteCatalogData'
import './App.css'
import { Card } from 'src/components/Card';
import { AddCard } from 'src/components/AddCard';
import { useCallback } from 'react';
import { useAddSite } from 'src/hooks/useAddSite';

function App()
{
  const sites = useSiteCatalogData();
  const addSite = useAddSite()
  const addCard = useCallback((name: string) =>
  {
    addSite?.(name);
  }, [addSite]);

  return (
    <>
      <header className="border-bottom mb-2">
        <div className="container">
          <h3>Каталог сайтов</h3>
        </div>
      </header>
      <main className="container d-flex gap-2 flex-column">
        <AddCard onAdd={addCard} />
        {sites?.map(site => <div key={site.name} className="row">
          <Card {...site}></Card>
        </div>)}
      </main>
    </>
  )
}

export default App
