import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

/**
 * Generic Card component that displays content in a card format
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onClick] - Click handler for interactive cards
 * @param {string} [props.href] - Link URL (renders as Link if provided)
 */
function Card({ children, className, onClick, href }) {
  const cardClasses = classNames('card', className)
  
  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link to={href} className={cardClasses} onClick={onClick}>
        {children}
      </Link>
    )
  }
  
  // If onClick is provided but no href, make it a clickable div
  if (onClick) {
    return (
      <div 
        className={cardClasses} 
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick(e)}
        role="button"
        tabIndex={0}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>
    )
  }
  
  // Default: static card
  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

/**
 * Card Header component
 */
export function CardHeader({ children, className }) {
  return (
    <div className={classNames('card-header', className)}>
      {children}
    </div>
  )
}

/**
 * Card Body component
 */
export function CardBody({ children, className }) {
  return (
    <div className={classNames('card-body', className)}>
      {children}
    </div>
  )
}

/**
 * Card Footer component
 */
export function CardFooter({ children, className }) {
  return (
    <div className={classNames('card-footer', className)}>
      {children}
    </div>
  )
}

/**
 * Card Title component
 */
export function CardTitle({ children, className }) {
  return (
    <h5 className={classNames('card-title', className)}>
      {children}
    </h5>
  )
}

/**
 * Card Text component
 */
export function CardText({ children, className }) {
  return (
    <p className={classNames('card-text', className)}>
      {children}
    </p>
  )
}

export default Card
