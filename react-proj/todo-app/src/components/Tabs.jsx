export function Tabs(props) {
  const { todos } = props

  const tabs = ['All', 'Open', 'Completed'];

  return (
    <nav className="tab-component">
      {tabs.map((tab, index) => {
        const numOfTasks = tab === 'All' ? 
          todos.length : 
          tab === 'Open' ?
            todos.filter(val => !val.complete).length 
            : todos.filter(val => val.complete).length

        return (
          <button key={index} className="tab-button">
            <h4>{tab} <span> ({numOfTasks})</span></h4>
          </button>
        )
      })}
    </nav>
  )
}