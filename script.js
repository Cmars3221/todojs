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
    },

    toggleAll:function(){

      var totalTodos = this.todos.length;
      var completedTodos = 0;
      //get number of completed todos as numeric count...we use a for loop
        for (var i=0; i< totalTodos; i++){
         if(this.todos[i].completed===true){
              completedTodos++;
            }
        }
      // Case1:(everything true) if everything is true, make everything false.
        if(completedTodos ==  totalTodos){
          for(var i=0; i<totalTodos;i++){
            this.todos[i].completed = false;
          }

        }
         //Case2: Otherwise, make everything true.
         else{
          for(var i=0; i<totalTodos;i++){
            this.todos[i].completed = true;
          }
        }
    }


};
