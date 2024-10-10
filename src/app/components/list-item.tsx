"use client"

import { Item } from "@/lib/types"
import { EllipsedText } from "./ellipsed-text"
import { ChevronsUp, Edit, GripVertical, Plus } from "lucide-react"

export function ListItem({ item }: { item: Item }) {
  const onClick = () => {
    alert(`Editing item ${item.id}`)
  }
  return (
    <div
      tabIndex={0}
      className="relative peer border rounded-md p-2 flex items-start justify-between gap-4 bg-white focus:border-blue-500 focus-visible:border-blue-500"
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center gap-4 text-sm min-w-16">
          {`L${item.id}`}
        </div>
        <EllipsedText className="text-muted-foreground text-xs" nbLines={2}>
          {item.description}
        </EllipsedText>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button className="cursor-grab drag-handle" tabIndex={-1}>
          <GripVertical className="size-4 text-muted-foreground" />
          <span className="sr-only">Move Item</span>
        </button>
        <button
          onClick={onClick}
          tabIndex={-1}
          className="size-6 hover:bg-slate-100 flex items-center justify-center rounded-md"
        >
          <Edit className="size-4" />
          <span className="sr-only">Edit {item.id}</span>
        </button>
      </div>
    </div>
  )
}
