export default async function BlogPost({ params }) {
    const { slug } = await params;
    return (
        <div>
            <h1>This is slug id {slug}</h1>
        </div>
    );
}