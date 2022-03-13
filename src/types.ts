export interface Todo {
  id: number
  text: string
  complete: boolean
}

export type FilterType = 'all' | 'active' | 'completed'
