
## I. Landing

  1. Display Default Landing page as a Visitor

  ```
    Given a visitor visits `http://cburgdorf.github.io/angular-todo-app` web application.
    When the visitor's browser loaded the page
    Then the page displays `Todos` heading text
      And the page displays `What needs to be done?` text input 
      And the page displays `Click to edit a todo` label
  ```

## II. Single Todo

  1. Add a new Todo Item

  ```
    Given a visitor enter a new Todo item with value: `Wake up in the morning`
    When the visitor press their enter key
    Then a new item is displayed at below the input text box
      And the new item consist of an empty tickbox on its left hand side
      And the new item consist of `Wake up in the morning` text on its right hand side
      And there is small text below the line separator which says `1 items left.`
  ```

  2. Select a Todo Item

  ```
    Given there is an existing item in Todo list labeled as `Wake up in the morning`
    When the visitor click the checkbox on the `Wake up in the morning` item
    Then the todo item's checkbox is checked
      And the Todo item's label is crossed out
      And the todo stats label is updated as `0 items left`
      And a link labeled as `Clear 1 completed item` is shown
  ```

  3. Remove a Todo item

  ```
    Given there is an existing item in Todo list labeled as `Wake up in the morning`
    When the visitor click the checkbox on the `Wake up in the morning` item
      And the visitor click the `Clear 1 completed item` link
    Then the associated todo item is removed
  ```