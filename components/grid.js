export default function Grid({ children, className }) {
  return(
    <div className={`grid grid-cols-10 ${className}`}>
      {children}
    </div>
  )
}