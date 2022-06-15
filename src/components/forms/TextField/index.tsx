import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { Input } from '../../fields/Input';
import Label from '../../fields/Label';
import Text from '../../fundation/Text';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label?: string,
  // fieldError?: FieldError | undefined
}

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps>
  = ({name, label, ...rest}, ref) => {
  return (
    <Label>
      {label && <Text>{label}</Text>}
      <Input id={name} name={name} {...rest} ref={ref}/>
    </Label>
  );
}

export default forwardRef(TextField);
