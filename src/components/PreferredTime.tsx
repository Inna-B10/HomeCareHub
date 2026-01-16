import { ChangeEventHandler } from 'react'

interface IPreferredTime {
  label: string
  value: string
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export function PreferredTime({label, value, onChange}: IPreferredTime) {
  return (
    <>
      <label>
        {label}
        <select
          value={value || ''}
          onChange={onChange}
        >
          <option value="no-preference">Без предпочтений</option>
          <option value="morning">Утро</option>
          <option value="afternoon">День</option>
        </select>
      </label>
    </>
  )
}

