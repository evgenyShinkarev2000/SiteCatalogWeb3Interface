export interface TagProps
{
  name: string,
  positiveVoteCount: number,
  negativeVoteCount: number,
}

export function Tag(props: TagProps)
{
  return <div className="card">
    <div className="card-body p-1">
      <div className="d-flex justify-content-start align-items-center gap-1">
        <h6 className="m-0">{props.name}</h6>
        <h6 className="text-success m-0 p-0">{props.positiveVoteCount}</h6>
        <h6 className="text-danger m-0 p-0">{props.negativeVoteCount}</h6>
      </div>
    </div>
  </div>

}