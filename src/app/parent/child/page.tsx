import { notFound } from 'next/navigation';

export default function ParentChildPage() {
    notFound();
    return (
        <div>
            <h1 className="text-2xl">Parent Child Page</h1>
            <p>This is the parent-child page.</p>
        </div>
    );
}