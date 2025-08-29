import * as React from "react"

export function Separator({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={"h-px w-full bg-blue-100 " + className} {...props} />
}
