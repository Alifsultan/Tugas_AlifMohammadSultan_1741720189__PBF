import React from 'react';
import CreateTodo from './Containers/CreateTodo'
import Table from './Containers/Table'

function App() {
  return (
    <div className="App">
      <div>
        <CreateTodo />
      </div>
      <Table />
    </div>
  );
}

export default App;