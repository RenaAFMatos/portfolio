import "./Home.css";
import Logo from './assets/rena.png'

function Home() {
    return (
        <>
            <div className="text">
                <h2>Hello my name is <span>Renato</span> 👋🏼</h2>
                <h1>Creative Front-end developer</h1>
                <p>
                    I design and code beatiful websites for you to further your
                    business!
                </p>
            </div>
            <img src={Logo} alt="Rena" className="logo-home" />
            <div className="card-wrapper">
                <div className="card">
                    <h3>2+</h3>
                    <p>years of experience</p>
                </div>
                <div className="card">
                    <h3>X+</h3> 
                    <p>Projects</p>
                </div>
                <div className="card">
                    <h3>X+</h3>
                    <p>Satisfied Customers</p>
                </div>
            </div>
            <div className="about-me">
                <h2>About me</h2>
                <p>
                    I am a creative front-end developer with a passion for
                    designing and coding beautiful websites. I have been working
                    in the industry for 2 years and have worked on X+ projects
                    with X+ satisfied customers. I am always looking to improve
                    my skills and learn new technologies to further my career.
                </p>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <div className="skills-wrapper">
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">React</div>
                    <div className="skill">Problem Solving</div>
                    <div className="skill">Express</div>
                </div>
            </div>
        </>
    );
}

export default Home;
