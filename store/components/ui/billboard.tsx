import { Billboard } from "@/types";

interface BillboardProps {
    data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div 
            className="relative aspect-square md:aspect-[2.4/1] rounded-xl overflow-hidden"
            style={{ backgroundImage: ` url(${data?.imageUrl})`}}>
                <div className="flex flex-col items-center justify-center text-center h-full w-full gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-wxl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard;