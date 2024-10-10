import { ComponentProps, ReactNode, useEffect, useTransition } from "react"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"
import {
  animations,
  handleEnd as coreHandleEnd,
  DragState,
  SynthDragState,
} from "@formkit/drag-and-drop"
import { cn } from "@/lib/utils"

type Props<T> = {
  onChange?: (data: T[]) => Promise<void> | void
  items: T[]
  children: (item: T) => ReactNode
  dragHandle?: string
  checkSame?: (curr: T[], changed: T[]) => boolean
} & Omit<ComponentProps<"div">, "children" | "onChange">

const compareArrays = <_, T>(a: T[], b: T[]) =>
  a.length === b.length && a.every((element, index) => element === b[index])

export const Draggable = <_, T>({
  onChange,
  items,
  children,
  dragHandle,
  checkSame = compareArrays,
  ...props
}: Props<T>) => {
  const [pending, startTransition] = useTransition()

  const onDragEnd = async (data: DragState<T> | SynthDragState<T>) => {
    const parent = data.currentParent.el
    const newData = data.currentParent.data.getValues(parent)
    const isSame = checkSame(items, newData)

    !isSame && startTransition(async () => await onChange?.(newData))
    coreHandleEnd(data)
  }

  const [parent, listItems, setValues] = useDragAndDrop<HTMLDivElement, T>(
    items,
    {
      dragHandle,
      plugins: [animations()],
      handleEnd: onDragEnd,
      longPress: true,
      longPressClass: "shadow-xl peer:opacity-50",
      draggingClass: "opacity-50 bg-muted border border-blue-500",
      dropZoneClass: "bg-muted border-dashed relative",
      //nativeDrag: true,
    }
  )

  useEffect(() => {
    setValues(items)
  }, [items, setValues])

  return (
    <div
      ref={parent}
      className={cn(props.className, {
        "opacity-50 animate-pulse pointer-events-none": pending,
      })}
      tabIndex={-1}
      {...props}
    >
      {listItems.map(children)}
    </div>
  )
}
