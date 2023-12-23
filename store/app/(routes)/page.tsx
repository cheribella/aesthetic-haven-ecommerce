import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async() => {
    const billboard = await getBillboard("b58b961f-7982-4863-9532-62fc9dd14b95");

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                data={billboard}/>
            </div>
        </Container>
     );

}
 
export default HomePage;