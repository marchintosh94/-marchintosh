
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {children: React.ReactNode}> = ({children, className, ...props}) => (
  <button {...props} className={`group mt-6 w-full ${className}`}>{children}</button>
)

export default Button