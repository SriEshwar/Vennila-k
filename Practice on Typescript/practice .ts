// Any
let EmployyeId: any = 1123;
EmployyeId = 'Hello';
EmployyeId = true;
console.log(EmployyeId);

// Tuple
let tuple: [number, string] = [10, 'Hello'];
console.log(tuple);

// Unknown
let unknownValue: unknown = 10;
console.log(unknownValue);

// Never
function throwError(message: string): never {
    throw new Error(message);
}

// Enum
enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

let userDirection: Direction = Direction.Up;
console.log(userDirection);

// Functions
function username(FirstName: String, LastName: String): String {
    return FirstName .concat(LastName.toString());
}
console.log(username("vennila","krish"));

// Array
let employeeExperience: number[] = [1, 2, 3, 4, 5];
console.log(employeeExperience);

// Set
let uniqueNumbers: Set<number> = new Set([1, 2, 3, 4, 5]);
console.log(uniqueNumbers);

// List (Array)
let EmployeeNames: string[] = ['Ram', 'Raju', 'vennila'];
console.log(EmployeeNames);

// Map
let keyValueMap: Map<string, number> = new Map();
keyValueMap.set('one', 1);
keyValueMap.set('two', 2);
console.log(keyValueMap);
