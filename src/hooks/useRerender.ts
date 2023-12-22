import { useState } from "react";

export function useRerender(): () => void
{
  const [, setState] = useState(false);

  return () => setState(prev => !prev);
}