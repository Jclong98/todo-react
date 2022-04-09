import { DarkToggle } from '../DarkToggle'

export function Header() {
  return (
    <header className="header">
      <h1 className="h1">TODO</h1>

      <div>
        <DarkToggle />
      </div>
    </header>
  )
}
