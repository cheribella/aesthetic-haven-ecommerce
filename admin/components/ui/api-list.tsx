"use client";

import { APIAlert } from "@/components/ui/api-alert";
import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";

interface APIListProps {
  entityName: string;
  entityIdName: string;
}

export const APIList: React.FC<APIListProps> = ({
  entityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <APIAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <APIAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <APIAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <APIAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <APIAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};
