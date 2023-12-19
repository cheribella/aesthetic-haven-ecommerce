"use client";

import { useOrigin } from "@/hooks/use-origin";

import { useParams } from "next/navigation";

import { APIAlert } from "@/components/ui/api-alert";

interface APIListProps {
  entityName: string;
  entityIdName: string;
}

export const APIList: React.FC<APIListProps> = ({
  entityName,
  entityIdName,
}) => {
  const origin = useOrigin();
  const params = useParams();

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
