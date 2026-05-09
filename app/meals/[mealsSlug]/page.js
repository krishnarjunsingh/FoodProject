export const dynamicParams = false;

// THIS IS THE MISSING PIECE:
export async function generateStaticParams() {
    // Return an array of the slugs you want to exist.
    // If you have 'burger' and 'pizza', return them like this:
    return [
        { mealsSlug: 'burger' },
        { mealsSlug: 'pizza' }
    ];
}

export default function SameMeals() {
    return (
        <h1>Some Meals</h1>
    );
}