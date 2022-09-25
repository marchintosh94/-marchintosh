const Title: React.FC<{children: React.ReactNode}> = ({children}) => (
  <h1 className="text-4xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl max-w-2xl logo-title">
    {children}
  </h1>
)

export default Title