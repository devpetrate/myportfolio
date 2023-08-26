import './AboutSection.css';


function AboutSection() {
    return (
        <div className='aboutwrapper'>
            <h1><span class="underline">Ab</span>out</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis deserunt consequatur sit dignissimos modi distinctio possimus
                voluptates, saepe eligendi illo nostrum voluptas repellendus autem iusto error incidunt facere. Voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis deserunt consequatur sit dignissimos modi distinctio possimus voluptates, saepe eligendi illo nostrum voluptas repellendus autem iusto error incidunt facere. Voluptatibus.</p>
            <section>
                <a href="https://drive.google.com/file/d/1xQ7Pt8OFnoEvjiOYX6TkNalhVdgwJ95u/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer">
                    <button >Download CV</button></a>
            </section>
        </div>
    )
}

export default AboutSection