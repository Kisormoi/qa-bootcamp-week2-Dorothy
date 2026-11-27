let employeeDetails: {
    id: number;
    name?:string;
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Dorothy',
    retire: (date: Date) => {
        console.log('Retirement date', date);
    }
};

console.log('Employee ID:', employeeDetails.id);
console.log('Employee Name:', employeeDetails.name);

employeeDetails.retire(new Date('2036-12-31'));