import type { Court } from '../types/court'

const API_URL = import.meta.env.VITE_API_URL

export async function getCourts(): Promise<Court[]> {
  const response = await fetch(`${API_URL}/api/courts`)
  if (!response.ok) {
    throw new Error('Failed to load courts')
  }
  return response.json()
}