import React from 'react'
import { isEmpty, isNil } from 'lodash-es'
import classNames from 'classnames'

/**
 * Generic CardList component that displays a collection of cards with state management
 * @param {Object} props
 * @param {Array} props.items - Array of data items to render
 * @param {Function} props.renderCard - Function to render each card (receives item and index)
 * @param {boolean} [props.isLoading] - Loading state
 * @param {boolean} [props.isError] - Error state
 * @param {boolean} [props.isEmpty] - Empty state (if not provided, auto-detected from items)
 * @param {string} [props.loadingMessage] - Custom loading message
 * @param {string} [props.errorMessage] - Custom error message
 * @param {string} [props.emptyMessage] - Custom empty state message
 * @param {string} [props.className] - Additional CSS classes for list container
 * @param {string} [props.cardClassName] - Additional CSS classes for each card wrapper
 */
function CardList({
  items = [],
  renderCard,
  isLoading = false,
  isError = false,
  isEmpty: isEmptyProp,
  loadingMessage = 'Loading...',
  errorMessage = 'Loading failed :(',
  emptyMessage = 'No items are here... yet.',
  className,
  cardClassName,
}) {
  // Auto-detect empty state if not explicitly provided
  const isEmptyState = !isNil(isEmptyProp) ? isEmptyProp : isEmpty(items)

  // Loading state
  if (isLoading) {
    return (
      <div className={classNames('card-list', className)} aria-live="polite">
        <p className="card-list-message">{loadingMessage}</p>
      </div>
    )
  }

  // Error state
  if (isError) {
    return (
      <div className={classNames('card-list', className)} aria-live="assertive">
        <p className="card-list-message error">{errorMessage}</p>
      </div>
    )
  }

  // Empty state
  if (isEmptyState) {
    return (
      <div className={classNames('card-list', className)}>
        <p className="card-list-message">{emptyMessage}</p>
      </div>
    )
  }

  // Render cards
  return (
    <div className={classNames('card-list', className)}>
      {items.map((item, index) => {
        // Skip null/undefined items
        if (isNil(item)) {
          return null
        }

        // Generate a key - prefer item.id or item.slug, fallback to index
        const key = item.id || item.slug || item.key || index

        return (
          <div key={key} className={classNames('card-list-item', cardClassName)}>
            {renderCard(item, index)}
          </div>
        )
      })}
    </div>
  )
}

export default CardList
