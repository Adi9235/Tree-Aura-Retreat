import Link from 'next/link';
import React from 'react';

export default function BookingCancelPage() {
    return (
        <div style={{ paddingTop: '150px', minHeight: '80vh', textAlign: 'center' }} className="container">
            <div className="bg-red-50 p-10 rounded-lg inline-block shadow-lg border border-red-200">
                <h1 className="text-4xl font-bold text-red-800 mb-4">Booking Cancelled</h1>
                <p className="text-xl text-gray-700 mb-8">
                    You have cancelled the payment process. No charges were made.
                </p>
                <Link href="/stay" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
                    Try Again
                </Link>
            </div>
        </div>
    );
}
