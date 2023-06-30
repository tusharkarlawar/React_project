
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:'mumbai',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:'pune',},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:'Goa',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:'nagpur',
    },

  ];
  return (
    <div>
      <h2></h2>
      {expenses.map((item) =>(
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.location}
        ></ExpenseItem>

      ))}
    </div>
  );
}

export default App;
