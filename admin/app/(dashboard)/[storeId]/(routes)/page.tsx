import prismadb from "@/lib/prismadb";

// Define the interface 'DashboardPageProps' with a 'params' property of type { storeId: string }.
interface DashboardPageProps {
  params: { storeId: string };
}

// Define a React functional component 'DashboardPage' that receives 'params' as a prop.
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  // Use 'prismadb' to find the first store that matches the specified condition asynchronously.
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    }
  });
  // Return a JSX element displaying the name of the active store (or 'undefined' if not found).
  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;
