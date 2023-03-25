import { StyledButton } from "./button.styles"

const Button = ({children, otherProps}) => {
  return (
    <StyledButton {...otherProps}>{children}</StyledButton>
  )
}

export default Button