import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffleArray<T>(items: T[]) {
  const nextItems = [...items]

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = nextItems[index]

    nextItems[index] = nextItems[randomIndex]
    nextItems[randomIndex] = currentItem
  }

  return nextItems
}

export function pickRandomItems<T>(items: T[], count: number) {
  return shuffleArray(items).slice(0, count)
}
