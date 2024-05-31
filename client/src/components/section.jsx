import Sections from "./sections"

const Section = () => {
  return (
    <section className="section-container">
      <div className="section-title-container">
        <h2 className="section-title">section</h2>
        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.</p>
      </div>
      <img className="section-image" src="./amazon.webp" />
    </section>
  )
}

export default Section;
