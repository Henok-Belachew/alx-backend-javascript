export default function createEmployeesObject(departmentName, employee) {
  return {
    [departmentName]: employee,
  };
}
