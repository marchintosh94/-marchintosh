const Title2: React.FC<React.HtmlHTMLAttributes<HTMLHeadElement> & {children: React.ReactNode}> = ({children, className, ...props}) => (
  <h2 className={`text-xl font-medium tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl max-w-2xl ${className}`} {...props}>
    {children}
  </h2>
)

export default Title2