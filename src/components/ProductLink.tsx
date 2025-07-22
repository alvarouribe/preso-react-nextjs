"use client"

import Link from "next/link";

export default function ProductLink({ id, title}: { id: number; title: string }) {
    return (
        <div>
            <Link href={`/products/${id}`}>{title}</Link>
        </div>
    );
}