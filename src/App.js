import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import Greet  from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Home'
import Message from './components/Message'
import Counter from './components/Counter'
import Destructuring from './components/Destructuring'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'

function App() {
  return (
    <div className="App">
      <LifecycleA/>
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Destructuring name='Tony Stark'heroName='Iron Man'></Destructuring> */}
      {/* <Counter></Counter> */}
      {/* <Greet name='Firoz khan' work='MERN Developer'>
        <p>This is me</p>
        <button>Click me</button>
      </Greet>
      <Welcome name='Firoz khan' work='MERN Developer'></Welcome>
      <Hello/> */}
      {/* <Message></Message> */}
      {/* <Welcome name='Firoz khan' work='MERN Developer'></Welcome> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <Inline></Inline> */}



    </div>
  );
}

export default App;
