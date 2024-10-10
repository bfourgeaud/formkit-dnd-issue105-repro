"use client"

import { Item } from "@/lib/types"
import { Draggable } from "./draggable"
import { ListItem } from "./list-item"

interface Props {
  items: Item[]
}

export function List({ items }: Props) {
  const handleChange = async (data: Item[]) => {
    //await reorderItems(data)
    console.log("Order updated")
  }

  return (
    <Draggable
      items={items}
      onChange={handleChange}
      dragHandle=".drag-handle"
      className="flex flex-col gap-2"
    >
      {(item) => <ListItem key={item.id} item={item} />}
    </Draggable>
  )
}
