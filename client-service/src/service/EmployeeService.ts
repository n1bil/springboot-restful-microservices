interface Employee {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  departmentCode: string,
  organizationCode: string,
}

interface Department {
  id: number,
  departmentName: string,
  departmentDescription: string,
  departmentCode: string,
}

interface Organization {
  id: number,
  organizationName: string,
  organizationDescription: string,
  organizationCode: string,
  createdDate: string,
}

export interface ApiResponse {
  employee: Employee,
  department: Department,
  organization: Organization
}

export const getEmployee = async (): Promise<ApiResponse> => {
  const response = await fetch("http://localhost:9191/api/employees/2", { method: "GET" });
  const data = await response.json();

  return data as ApiResponse;
}