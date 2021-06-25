import './App.css';
import Card from './Card'
import CardLi from './CardLi'

export default function App() {
  return (
    <div className="App">
      <Card title="Profile:" data="My name is Raul Garcia Lagunas. I'm from the greatest country that has
        ever existed: Mexico." />

      <CardLi title="Interests:" first="Philosophy" second="Cybersecurity" third="Science" fourth="Blockchain" fifth="Trading"/>

      <Card title="Learn:" data=" I want to learn the basics and get to a mid level on React, then how to
        apply those principles into my own projects." />

      <Card title="Expectations:" data="I expect finishing the module having a decent portfolio and starting my
        journey landing my 1'st job as a dev." />

      <CardLi title="Hobbies:" first="Playing the drums" second="Reading" third="Swimming" fourth="Calisthenics" fifth="Walking my dog"/>
    </div>
  );
}

