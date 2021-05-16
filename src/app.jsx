import React, {Component} from 'react'
import './app.css';
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  }

    handleIncrement = (habit) => {
        console.log(habit.name)
        const habits = [
            ...this.state.habits
        ]
        const index = habits.indexOf(habit)
        habits[index].count++
        this.setState({ habits: habits })
    }

    handleDecrement = (habit) => {
        const habits = [
            ...this.state.habits
        ]
        const index = habits.indexOf(habit)
        habits[index].count <= 0 ? habits[index].count = 0 : habits[index].count--
        this.setState({ habits: habits })
    }

    handleDelete = (habit) => {
        const habits = [
            ...this.state.habits
        ]
        const index = habits.indexOf(habit)
        habits.splice(index, 1)
        this.setState({ habits: habits })
    }

    onAdd = (name) => {
        const habits = [
            ...this.state.habits
        ]
        habits.push({ id: Date.now(), name: name, count: 0 })
        this.setState({ habits: habits })
    }

    handleReset = () => {
        const habits = this.state.habits.map(habit => {
            habit.count = 0
            return habit
        })
        this.setState({ habits })
    }

  render() {
    return (
        <>
          <Navbar habitsCnt={this.state.habits.filter(item => item.count > 0).length}/>
          <Habits
              habits={this.state.habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.onAdd}
              onReset={this.handleReset}
          />
        </>

    )
  }
}

export default App;