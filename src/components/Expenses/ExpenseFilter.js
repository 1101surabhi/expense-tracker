import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
  const selectYearHandler = (e) => {
    // console.log(e.target.value)
    props.selectedYearHandler(e.target.value)
  }
  return (
    <div className='expenses-filter'>
        <div className="expenses-filter__control">
            <label>Filter By Year</label>
            <select value={props.filteredYear} onChange={selectYearHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter