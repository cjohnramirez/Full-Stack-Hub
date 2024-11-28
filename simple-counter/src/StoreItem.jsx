export function StoreItem({item}) {
    return (
        <>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>{item.price}</button>
        </>
    )
}