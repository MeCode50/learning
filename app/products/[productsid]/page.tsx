export default function ProductDetails({ params }: {
    params:{productsid : string}
}) {
    return <h1>This page is about dynamic routing { params.productsid}</h1>
}