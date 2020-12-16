import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
const items=[
  {
    title:'What is React?',
    content:'React is a frontend javascirpt framework'
  },
  {
    title:'Whe  use React?',
    content:'React is a favorite js library among engineers'
  },
  {
    title:'How do you use  React?',
    content:'uou use react by creating ocmponents'
  },
]


function App() {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
