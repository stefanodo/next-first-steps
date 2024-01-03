import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'SEO Description',
    keywords: ['Pricing Page', 'Stefano', 'Información']
}

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}