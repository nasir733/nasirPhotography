import './styles/index.scss';
import elenajoy from "./img/elena-joy.png"
function App() {
  return (
    <>
    <header className="shadow main-head">
      <nav className="flex items-center w-11/12 min-h-full p-8 m-auto ">
        <h1 id="logo" className="flex-1">Nasir Iqbal</h1>
        <ul className="flex justify-around flex-1 n">
          <li><a href="#about" id="about">about
            </a></li>
            <li><a href="#work" id="about">Work
            </a></li>
            <li><a href="#contact" id="about">Contact
            </a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section className="flex flex-wrap w-11/12 min-h-screen m-auto hero">
        <div className="flex flex-col items-center justify-center text-center hero-1-introduction-1-">
        <h2>Nasir <br/>developer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quae, fugiat dignissimos repellendus deserunt odit quis reprehenderit! Quidem aspernatur laboriosam rem earum quae, porro quas provident optio mollitia autem praesentium?</p>
        <a href="#gallery">Gallery</a>
        
        </div>
        <div className="flex-1 hero-images">
          <img className="object-cover w-full h-full" src={elenajoy} alt="picture of elena joy"/>
        </div>
      </section>
    </main>
    </>
  );
}

export default App;
