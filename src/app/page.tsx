import { Item } from "@/lib/types"
import { List } from "./components/list"
import { Edit } from "lucide-react"

const items: Item[] = [
  {
    id: "1",
    description:
      "Click me to expand the text, consectetur adipisicing elit. Veniam rerum inventore officia quam dolor placeat eius tenetur distinctio vero, laboriosam nisi ad tempore quasi! Voluptas eius animi eaque nemo numquam, magni temporibus in consectetur enim vitae facere fuga at earum ducimus dolores sequi quod mollitia accusantium porro voluptates tenetur sapiente.",
  },
  {
    id: "2",
    description:
      "Click me to expand the text, consectetur adipisicing elit. Veniam rerum inventore officia quam dolor placeat eius tenetur distinctio vero, laboriosam nisi ad tempore quasi! Voluptas eius animi eaque nemo numquam, magni temporibus in consectetur enim vitae facere fuga at earum ducimus dolores sequi quod mollitia accusantium porro voluptates tenetur sapiente.",
  },
  {
    id: "3",
    description:
      "Click me to expand the text, consectetur adipisicing elit. Veniam rerum inventore officia quam dolor placeat eius tenetur distinctio vero, laboriosam nisi ad tempore quasi! Voluptas eius animi eaque nemo numquam, magni temporibus in consectetur enim vitae facere fuga at earum ducimus dolores sequi quod mollitia accusantium porro voluptates tenetur sapiente.",
  },
  {
    id: "4",
    description:
      "Click me to expand the text, consectetur adipisicing elit. Veniam rerum inventore officia quam dolor placeat eius tenetur distinctio vero, laboriosam nisi ad tempore quasi! Voluptas eius animi eaque nemo numquam, magni temporibus in consectetur enim vitae facere fuga at earum ducimus dolores sequi quod mollitia accusantium porro voluptates tenetur sapiente.",
  },
]

export default function Home() {
  return (
    <main className="max-w-[500px] mx-auto px-8 py-16 grid gap-8">
      <h1 className="text-2xl">Formkit DND - Reproduction issue #105</h1>
      <List items={items} />
      <div className="border p-4">
        <ul className="list-disc list-inside grid gap-2">
          <li>On mobile the Edit button cannot be clicked</li>
          <li>On mobile, the text cannot be expanded onClick</li>
          <li>
            When switching from desktop to mobile, the DND feature isn&apos;t
            working, has to refresh. (Either way)
          </li>
          <li>
            When longPress=true, on mobile you can still drag items without
            longPressing
          </li>
        </ul>
      </div>
    </main>
  )
}
