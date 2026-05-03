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

export function pickDeterministicItems<T>(items: T[], count: number, seed: string) {
  if (count <= 0 || items.length === 0) {
    return []
  }

  if (items.length <= count) {
    return [...items]
  }

  const startIndex =
    Array.from(seed).reduce((total, char) => total + char.charCodeAt(0), 0) % items.length
  const rotatedItems = items.slice(startIndex).concat(items.slice(0, startIndex))

  return rotatedItems.slice(0, count)
}
