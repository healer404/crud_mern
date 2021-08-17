import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
      // Navigation Section Holder
      <div>
        // Navigation Section
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          // Unordered list of the navigation links
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item"><Link to="./" className="nav-item">Todos</li> // Navigation Link Item

            <li className="navbar-item"><Link to="./create" className="nav-item">Create Todo</li> // Navigation Link Item
          </ul>
          // END Unordered list of the navigation links
        </nav>
        // END Navigation Section
      </div>
      // END Navigation Section Holder

    // ***** act as the navigation configuration something ***** //
    <Switch>
      <Route exact path="./" component={TodoList}/> // Will act as the home
      <Route exact path="./edit/:id" component={EditTodo}/> // Will act as the edit todo item
      <Route exact path="./create" component={CreateTodo}/> // Will act as the create todo item
    </Switch>
    // ***** END act as the navigation configuration something ***** //
  );
}

export default App;
