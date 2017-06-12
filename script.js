var todoList = {
    todos: [], // todos array will capture data when added.

    addTodo: function(todoText){
      this.todos.push({
        todoText:todoText,
        completed:false
      });
    },

    changeTodo: function(position, changeInsert){
      this.todos[position-1].todoText = changeInsert;   // this will give us just the todoText property.
                            //rather than the entire object.
    },

    deleteTodo: function(position){
      this.todos.splice(position-1, 1);
    },

    toggleCompleted: function(position){
       var todo = this.todos[(position)-1];   //grabbing the pushed todo
       todo.completed = !todo.completed;  // in the todos object this value of property
                  //completed was false, now its the oppposite..."true"
    }


};
