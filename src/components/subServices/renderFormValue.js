export function getRenderFormValue(Name, req = true) {
  return function renderFontValue(valueProps, snapshot, className) {
    const { option } = snapshot
    const style = {
      fontFamily:
        !snapshot.focus && option && "stack" in option ? option.stack : null,
    }
    const inputVal = snapshot.focus ? snapshot.search : snapshot.displayValue
    return (
      <input
        {...valueProps}
        className={className}
        required={req}
        style={style}
        name={Name}
        id={Name}
        value={inputVal}
      />
    )
  }
}
