import React from 'react'
import { Input, InputProps } from '@chakra-ui/react'

const InputX: React.FC<InputProps> = (props) => {
    return (
        <Input 
            height="50px"
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderRadius="sm"
            {...props}
          />
    )
}
export default InputX;