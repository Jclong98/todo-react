import { useState, useEffect } from 'react'

interface Props {
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export function Check({ checked, onChange }: Props) {
  return (
    <div className="check">
      <label className={checked ? 'checked' : ''}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <img v-show="value" src="/images/icon-check.svg" alt="check icon" />
      </label>
    </div>
  )
}
