import React from 'react'
import { link } from 'react-router-dom'
import propTypes from 'prop-types'


export default function Button(props) {
  const clasName = [prop.className]
  if(prop.isPrimary) className.push("isPramary")
  if(prop.isLarge) className.push("btn-lg")
  if(prop.isSmall) className.push("btn-sm")
  if(prop.isBlock) className.push("btn-block")
  if(prop.hasShadow) className.push("btn-shadow")

  const onClick = () => {
    if(prop.onClick) prop.onClick()
  };

  if(props.isDisabled || props.isLoading)
  return <span className={className.join(" ")} style={props.style}>{props.children}
  if(props.isDisabled) className.push("Disabled")

  </span>
   
  if(props.isDisbled || props.isLoading)
  return 
   <span className={className.join(" ")} style={props.style} >
    {props.children}
    {
      props.isLoading ? <>
      <span className="spinner-border spinner-border-sm mx-5"></span>
      <span className="sr-only">Loading...</span>
      </>: 
      props.children
    }
  </span>

  if(props.type === "link") {
    if(props.isExternal) { 
      return (
        <a href={props_href} className={className.join(" ")} style={props.style} target={props.target ==="_blank" ?"_blank":undefined} rel={props.target =="_blank" ? "noopener noreferrer": undefined}
        > 
        {props.children}
      </a>
    )
      }else {
        return (
          <link to={props_href} className={className.join(" ")} style={props.style} onClick={onClick}
          >
            {props.childen}
          </link>
        )
        
      }
  }

  return <Button className={className.join(" ")} style={props.style} onClick={onClick}>{props.children}</Button>;
}

Button.propTypes = {
  type: propTypes.oneof(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  clasName: propTypes.string,
  isExternal: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
}
