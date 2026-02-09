/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import React from 'react'
import CardList from './CardList'
import Card, { CardBody, CardTitle, CardText, CardFooter } from './Card'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling headphones with 30-hour battery life',
    price: '$199.99',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and GPS',
    price: '$299.99',
    category: 'Wearables',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum stand for better posture',
    price: '$49.99',
    category: 'Accessories',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit keyboard with blue switches',
    price: '$129.99',
    category: 'Electronics',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    description: '7-in-1 adapter with HDMI, USB 3.0, and SD card reader',
    price: '$39.99',
    category: 'Accessories',
  },
]

function CardListExample() {
  const renderProductCard = (product) => {
    return (
      <Card>
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardText>{product.description}</CardText>
          <CardFooter>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{product.price}</span>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>{product.category}</span>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    )
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Product Catalog</h1>
      <CardList
        items={products}
        renderCard={renderProductCard}
      />
    </div>
  )
}

export default CardListExample
