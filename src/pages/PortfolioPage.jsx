export default function PortfolioPage() {
    return (
    <section id="my-work">
            <h2>My Work</h2>
            <hr />
            <div className="projects">
                <a href="https://andruegage.github.io/horiseon-challenge/" target="_blank" className="animate" id="project-one"
                    aria-label="A business meeting.">
                    <div>
                        <h3>Horiseon</h3>
                        <p>Code Refactoring Challenge</p>
                    </div>
                </a>
                <div className="side-projects">
                    <a href="https://andruegage.github.io/prework-study-guide/" target="_blank" className="animate" id="project-two"
                        aria-label="A minimalist cat icon.">
                        <div>
                            <h3>Prework Study Guide</h3>
                            <p>Notes From Class</p>
                        </div>
                    </a>
                    <a href="https://github.com/AndrueGage/first-day-repo" target="_blank" className="animate" id="project-three"
                        aria-label="An illustration of a girl studying.">
                        <div>
                            <h3>First Day Repo</h3>
                            <p>Getting Started</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
)
}