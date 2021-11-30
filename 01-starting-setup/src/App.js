import ExpenseItem from './components/ExpenseItem'

function App() {
  
  // This is imparative UI
  // const para = document.createElement('p');
  // para.textContent = 'This is also visisble;'
  // document.getElementById('root').append(para)
  
  // React is declarative UI
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
