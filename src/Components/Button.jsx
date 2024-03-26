/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor ="text-white",
    className ="",
    ...props 

}) {
  return (
   <button className={`px-4 py2 rounded-lg cursor-pointer ${bgColor} ${textColor} ${className}`}{...props}>
    {children}
   </button>
  )
}

export default Button