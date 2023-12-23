import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async() => {
    const products = await getProducts({ isFeatured: true});
    const billboard = await getBillboard("b58b961f-7982-4863-9532-62fc9dd14b95");

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
     );

}
 
export default HomePage;