
const Subtitle: React.FC<{children: React.ReactNode} & React.HTMLAttributes<HTMLHeadingElement>> = ({children, className, ...props}) => (
  <h3 className={`text-xl ${className}`}>
    {children}
  </h3>
)

export default Subtitle