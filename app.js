// TODO

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    return (
      <li>{this.props.food}</li>
    );
  }


  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li 
      style={style}
      onClick={this.onListItemClick.bind(this)}
      hover={this.onListItemClick.bind(this)}
      >{this.props.food}</li>
    );
  }

}

const GroceryList = (props) => {
  
  const onListItemClick = (event) => {
    console.log('click!!');
  };

  return (

  <ul onClick={onListItemClick}>
    {props.foods.map((food, i) =>
      <GroceryListItem food={food} key={i} />
    )}
  </ul>  
  );
}

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList foods={['Peanuts', 'Cabbage', 'PopTarts']} />
  </div>
);



ReactDOM.render(<App />, document.getElementById('app'));