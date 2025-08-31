import { EmployeeManagementView } from "@/modules/admin-dashboard/ui/View/employee-management-view";
import React from "react";

interface Props {
  params: Promise<{
    organizationId: string;
  }>;
}

const EmployeesPage = async ({ params }: Props) => {
  const { organizationId } = await params;

  return <EmployeeManagementView organizationId={organizationId} />;
};

export default EmployeesPage;
