export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeesList},
    getNumberOfDepartments() {
      return Object.values(employeesList).length;
    },
  };
}
