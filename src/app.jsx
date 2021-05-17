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
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                return { ...habit, count: habit.count + 1 }
            }
            return item
        })
        // 해빗안에 카운트만 변경됐다고 해서 카운트만 업데이트 시켜주면 리액트는 해빗 오브젝트를 같은 오브젝트로 보기 때문에 렌더링을 안함.
        // 그래서 this.setState({ habits: habits }) 요렇게 해빗을 오브젝트 자체를 셋스테이트 이용해서 다 업뎃 해줘야됨
        this.setState({ habits: habits })
    }

    handleDecrement = (habit) => {
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                const count = habit.count - 1
                return { ...habit, count: count < 0 ? 0 : count }
            }
            return item
        })
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
            if(habit.count !== 0) {
                return { ...habit, count: 0 }
            }
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
