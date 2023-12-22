import { Tag, TagProps } from "src/components/Tag";

export interface CardProps
{
  name: string,
  positiveVoteCount: number,
  negativeVoteCount: number,
  tags: TagProps[],
}

export function Card(props: CardProps)
{
  return <div className="card">
    <div className="card-body p-2">
      <div className="row">
        <div className="col-auto">
          <div className="d-flex justify-content-start align-items-center gap-2">
            <h5 className="m-0">{props.name}</h5>
            <h5 className="text-success m-0 p-0">{props.positiveVoteCount}</h5>
            <h5 className="text-danger m-0 p-0">{props.negativeVoteCount}</h5>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex justify-content-start align-items-center gap-2">
            {props.tags.map(t => <Tag key={t.name} {...t} />)}
          </div>
        </div>
      </div>
    </div>
  </div>
}