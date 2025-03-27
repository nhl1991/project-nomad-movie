import { getProviderById } from "@/app/lib/utils";
import Provider from "../components/ProviderComponent";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const providers = await getProviderById(id);
    const regions = Object.keys(providers);
    return (
        <div className="min-h-screen bg-black">
            <Provider providers={providers} regions={regions}/>
        </div>
    );

}