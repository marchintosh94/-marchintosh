
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {children: React.ReactNode}> = ({children, ...props}) => <button className={``} {...props}>{children}</button>

export default Button