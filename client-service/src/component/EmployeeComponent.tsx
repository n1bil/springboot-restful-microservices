import { useEffect, useState } from "react"
import { ApiResponse, getEmployee } from "../service/EmployeeService"


export const EmployeeComponent = () => {
    const [employee, setEmployee] = useState<ApiResponse>()

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getEmployee();
                setEmployee(data);
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, [])

  return (
    
        <div className='card' style={{padding: 0}}>
            <h3 className="card-header"> View Employee Details</h3>
            <div className="card-body">
                <div style={{textAlign: "left"}}>
                    <p><strong>Employee First Name: </strong> {employee?.employee.firstName}</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p><strong>Employee Last Name: </strong> {employee?.employee.lastName}</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p><strong>Employee Email: </strong> {employee?.employee.email}</p>
                </div>
            </div>
            <h3 className="card-header"> View Department Details</h3>
            <div className="card-body">
                <div style={{textAlign: "left"}}>
                    <p><strong>Department Name: </strong> {employee?.department.departmentName}</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p><strong>Department Description: </strong> {employee?.department.departmentDescription}</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p><strong>Department code: </strong> {employee?.department.departmentCode}</p>
                </div>
            </div>
            <h3 className="card-header"> View Organization Details</h3>
            <div className="card-body">
                <div style={{textAlign: "left"}}>
                    <p><strong>Organization Name: </strong> {employee?.organization.organizationName}</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p><strong>Organization Description: </strong> {employee?.organization.organizationDescription}</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p><strong>Organization code: </strong> {employee?.organization.organizationCode}</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p><strong>Created date: </strong> {employee?.organization.createdDate}</p>
                </div>
            </div>
        </div>
    
  )
}
