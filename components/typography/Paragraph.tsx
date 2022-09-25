const Paragraph: React.FC<{children: React.ReactNode} & React.HTMLAttributes<HTMLParagraphElement>> = ({children, className, ...props}) => (
  <p className={`text-base ${className}`}>
    {children}
  </p>
)

export default Paragraph