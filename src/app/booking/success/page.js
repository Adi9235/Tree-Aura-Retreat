'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
    const searchParams = useSearchParams();
    // We can use session_id to verify if needed, but for now just show success
    const sessionId = searchParams.get('session_id');

    return (
        <div style={{ paddingTop: '150px', minHeight: '80vh', textAlign: 'center' }} className="container">
            <div className="bg-green-50 p-10 rounded-lg inline-block shadow-lg border border-green-200">
                <h1 className="text-4xl font-bold text-green-800 mb-4">Booking Confirmed!</h1>
                <p className="text-xl text-gray-700 mb-8">
                    Thank you for choosing Tree Aura Retreat. Your payment was successful.
                </p>
                <p className="mb-8 text-gray-600">
                    A confirmation email has been sent to you.
                </p>
                <Link href="/" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
                    Return Home
                </Link>
            </div>
        </div>
    );
}

export default function BookingSuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
