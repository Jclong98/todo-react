import { DarkToggle } from "../DarkToggle"
import './style.css'

export function Header() {

  return (
    <header>
      <h1>React Todo App</h1>

      <DarkToggle />
    </header>
  )
}