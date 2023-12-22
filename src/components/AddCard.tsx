import { useState } from "react";

export interface AddCardProps
{
  onAdd(siteName: string): void,
}

export function AddCard(props: AddCardProps)
{
  const [name, setName] = useState("");
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value);
  return <div className="card row">
    <div className="card-body p-2">
      <div className="d-flex flex-direction-row align-items-center justify-content-start gap-2 flex-wrap">
        <input placeholder="Название" value={name} onChange={inputChange} />
        <button className="btn btn-primary" onClick={() => props.onAdd(name)}>Добавить</button>
      </div>
    </div>
  </div>
}