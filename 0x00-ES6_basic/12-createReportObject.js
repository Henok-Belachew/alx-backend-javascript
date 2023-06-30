export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return this.allEmployees.keys(this.allEmployees).length;
    },
  };
}
