
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {children: React.ReactNode}> = ({children, className, ...props}) => (
  <button {...props} type="button" className={`${className}`}>{children}</button>
)

export default Button