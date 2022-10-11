const Paragraph: React.FC<{children: React.ReactNode} & React.HTMLAttributes<HTMLParagraphElement>> = ({children, className, ...props}) => (
  <p className={`text-base text-justify ${className}`}>
    {children}
  </p>
)

export default Paragraph