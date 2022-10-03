const Title3: React.FC<React.HtmlHTMLAttributes<HTMLHeadElement> & {children: React.ReactNode}> = ({children, className, ...props}) => (
  <h3 className={`text-lg font-normal tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl max-w-2xl ${className}`} {...props}>
    {children}
  </h3>
)

export default Title3