class Welcome extends React.Component {
  render() {
    return <h1>Hola!, {this.props.nombre}</h1>;
  }
}

const element = <Welcome nombre="Campitos" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);