'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  sku: string;
  name: string;
  price: number;
  stock: number;
}

const sampleCatalog: Product[] = [
  { sku: 'SKU-SEC-001', name: 'Secure DevSecOps Hoodie', price: 49.99, stock: 10 },
  { sku: 'SKU-SEC-002', name: 'Zero Trust Coffee Mug', price: 14.99, stock: 25 },
  { sku: 'SKU-SEC-003', name: 'Kubernetes Cluster Sticker Pack', price: 9.99, stock: 50 },
];