const domConteiner = document.querySelector("#root");
const root = ReactDOM.createRoot(domConteiner);
const toDo = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    }
];
class ToDos extends React.Component{
  render (){
    return <table>
            <thead>
              <tr>
                <th>{"Task"}</th>
                <th>{"Title of task"}</th>
              </tr>
            </thead>
            <tbody>
            {toDo.map((item, index) => <tr key={index} className={item.completed ? "completed" : "notCompleted"}>
                {<UserId key={`idItem ${index}`} usersId={item.id}/>}
                {<UserTitle key={`titleItem ${index}`} usersTitle={item.title}/>}
              </tr>)}
            </tbody>
          </table>
  }
};
class UserId extends React.Component{
  render (){
    const {usersId} = this.props
    return <td>{usersId}</td>
  }
};
class UserTitle extends React.Component{
  render(){
    const {usersTitle} = this.props
    return <td>{usersTitle}</td>
  }
};
const App = (<React.Fragment>
  <ToDos />
</React.Fragment>);
root.render(App);