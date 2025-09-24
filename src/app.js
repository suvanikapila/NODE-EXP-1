// employee-management.js

const readline = require("readline");

// Array to store employees
let employees = [];

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display menu
function showMenu() {
  console.log("\nPlease choose an option:");
  console.log("1. Add Employee");
  console.log("2. View All Employees");
  console.log("3. Remove Employee by ID");
  console.log("4. Exit");
  rl.question("> ", handleMenu);
}

// Function to handle menu choice
function handleMenu(choice) {
  switch (choice.trim()) {
    case "1":
      addEmployee();
      break;
    case "2":
      viewEmployees();
      break;
    case "3":
      removeEmployee();
      break;
    case "4":
      console.log("\n👋 Exiting Employee Management System. Goodbye!");
      rl.close();
      break;
    default:
      console.log("❌ Invalid choice! Please try again.");
      showMenu();
  }
}

// Function to add an employee
function addEmployee() {
  rl.question("\nEnter Employee Name: ", (name) => {
    rl.question("Enter Employee ID: ", (id) => {
      // Check if ID already exists
      if (employees.some((emp) => emp.id === id)) {
        console.log("⚠️ Employee ID already exists! Please try again.");
      } else {
        employees.push({ name, id });
        console.log("✅ Employee added successfully!");
      }
      showMenu();
    });
  });
}

// Function to view all employees
function viewEmployees() {
  if (employees.length === 0) {
    console.log("\n📭 No employees found.");
  } else {
    console.log("\n📋 Employee List:");
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. Name: ${emp.name} | ID: ${emp.id}`);
    });
  }
  showMenu();
}

// Function to remove employee by ID
function removeEmployee() {
  rl.question("\nEnter Employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      console.log(`🗑️ Employee with ID ${id} removed successfully!`);
    } else {
      console.log("❌ Employee not found!");
    }
    showMenu();
  });
}

// Start the app
console.log("Welcome to the Employee Management System!");
showMenu();
