let employee: {
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Dorothy',
    retire: (date: Date) => {
        console.log(date);
    }
};