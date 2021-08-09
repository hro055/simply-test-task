import React, { ForwardedRef, forwardRef, useState } from 'react';
import search from '../../../icons/Search_Icon.png';
import './Input.styles.scss';
const KEY_CODES_ENTER = 13;

interface IInputProps {
  error?: string;
  disabled?: boolean;
  className?: string;
  type?: string;
  withIcon?: boolean;
  placeholder?: string;
  value?: string;
  width: string | number;
  defaultValue?: string;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
  name?: string;
  style?: Object;
}

const Input: React.FC<IInputProps> = forwardRef(function Input(
  {
    error,
    disabled,
    className = 'input',
    type = 'text',
    withIcon = false,
    placeholder,
    value,
    defaultValue,
    onChange,
    onEnter,
    name,
    width,
    style,
    ...rest
  },
  ref: ForwardedRef<HTMLInputElement>
) {
  const [open, setOpen] = useState(false);
  const changeHandler = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const newVal = event.target.value;
      onChange(newVal);
    }
  }, [ onChange ]);

  const keyDownHandler = React.useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === KEY_CODES_ENTER && onEnter) {
      onEnter();
    }
  }, [ onEnter ]);

  const iconClick = () => {
    if (value) {
      onEnter?.();
    } else {
      setOpen(!open);
    }
  };
  let display = !withIcon ? "inline-block" : open ? "inline-block" : "none";
  return (
    <div>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        ref={ref}
        style={{width: width, display: display}}
        {...rest}
      />
      {withIcon && <div className="searchIcon" onClick={iconClick}><img src={search} width={25} height={25}></img></div>}
      {error && <span className="errorMessage">{error}</span>}
    </div>
  );
});

export default Input;
