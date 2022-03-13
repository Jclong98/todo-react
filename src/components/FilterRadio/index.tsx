type FilterType = 'all' | 'active' | 'completed'

interface Props {
  filter: FilterType
  onChange: (filter: FilterType) => void
}

export function FilterRadio({ filter, onChange }: Props) {
  const filterItems = [
    {
      label: 'All',
      value: 'all',
    },
    {
      label: 'Active',
      value: 'active',
    },
    {
      label: 'Completed',
      value: 'completed',
    },
  ]

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as FilterType)
  }

  return (
    <div>
      {filterItems.map((item) => (
        <label key={item.value}>
          <input
            type="radio"
            name="filter"
            value={item.value}
            onChange={onFilterChange}
            checked={filter == item.value}
          />
          {item.label}
        </label>
      ))}
    </div>
  )
}
