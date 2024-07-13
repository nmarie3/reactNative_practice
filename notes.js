//props - system to pass data from parent to a child
//state - system to track a piece of data that will change over time. if data changes app will rerender

//generally state variables are created in the most parent component that needs to read or change a state value
//if a child needs to read a state value, the parent can pass it down as a prop

//reducer - function that manages changes to an object
//gets called with two objects
//argument1: obj that hass all of our state in
//argument 2: obj that describes the update we want to make
//look at argument 2 and use it to decide how to change argument 1
//IMPORTANT *we never change argument 1 directly *we must always return a value to be used as argument 1

//action objs have a:
//type - string that describes the exact change operation we want to make
//payload - some data that is critical to the change operation
//ex. {type: 'change_red', payload; 15} what we want to change and by how much