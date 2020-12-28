import React from 'react'
import { camelize } from './utils'

const ConfigurationRow = ({ label, type, value, min, max, step = '1', onChange }) => {
  return (
    <div className="row">
      <label htmlFor={camelize(label)}>{label}: </label>
      <input
        type={type}
        name={camelize(label)}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        id={camelize(label)}
      />
    </div>
  )
}

export default ConfigurationRow
