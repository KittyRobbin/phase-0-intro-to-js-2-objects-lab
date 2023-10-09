// Define the employee object
const employee = {
  name: "Jesse mcguire",
  streetAddress: "123 Main St"
};

// Function to update employee with a new key-value pair (non-destructively)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Function to update employee with a new key-value pair (destructively)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key-value pair from the employee (non-destructively)
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete a key-value pair from the employee (destructively)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Testing the functions
console.log("Initial employee object:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 30);
console.log("Updated employee object (non-destructive):", updatedEmployee);

console.log("Employee object after non-destructive update:", employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "salary", 50000);
console.log("Employee object after destructive update:", employee);

const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee object without streetAddress (non-destructive):", employeeWithoutStreetAddress);

console.log("Employee object after non-destructive deletion:", employee);

destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Employee object after destructive deletion:", employee);


