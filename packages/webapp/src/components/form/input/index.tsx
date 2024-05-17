import TextField from '@mui/material/TextField';
import React, { ChangeEvent } from 'react';
import { ErrorInfo } from '../../../classes/client';

type InputProps = {
  name: string;
  error?: ErrorInfo;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
  type: string;
  value?: string;
  autoComplete?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  maxLength?: number;
  rows?: number;
};

const Input = ({
  name,
  error,
  onChange,
  required = true,
  type,
  value,
  label,
  autoComplete,
  fullWidth = true,
  disabled = false,
  maxLength = 254,
}: InputProps): React.ReactElement => {
  const fieldError = error?.fields?.[name];
  return (
    <TextField
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      error={Boolean(fieldError)}
      helperText={fieldError}
      variant="outlined"
      required={required}
      fullWidth={fullWidth}
      margin="dense"
      disabled={disabled}
      autoComplete={autoComplete}
      inputProps={{ maxLength: maxLength }}
    />
  );
};
export default Input;
