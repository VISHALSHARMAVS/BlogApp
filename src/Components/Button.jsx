

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor ="text-white",
    className ="",
    ...props 

}) {
  return (
   <button className={`px-4 py2 rounded-full ${className}${bgColor}${textColor}`}{...props}>
    {children}
   </button>
  )
}

export default Button