import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import React from 'react';

type FloatingLabelProps = {
  label: string;
  helperText?: string;
  errorMessage?: string;
} & FormControlProps &
  InputProps;

const FloatingLabel = (props: FloatingLabelProps) => {
  const { label, errorMessage, helperText, value, ...rest } = props;
  return (
    <FormControl variant="floating" {...rest}>
      <Input
        // focusBorderColor="green.500"
        placeholder=" "
        value={value}
        // focusBorderColor="red.300"
        // _focusVisible={{ outline: 'none' }}
        boxShadow={{ outline: 'none' }}
      />
      {/* It is important that the Label comes after the Control due to css selectors */}
      <FormLabel>{label}</FormLabel>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default FloatingLabel;
