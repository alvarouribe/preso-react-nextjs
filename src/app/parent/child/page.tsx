// import { notFound } from 'next/navigation'; // Uncomment

export default function ParentChildPage() {
    // notFound(); // Uncomment this line to trigger a 404 not found page
    return (
        <div>
            <h1 className="text-2xl">Parent Child Page</h1>
            <p>This is the parent-child page.</p>
        </div>
    );
}