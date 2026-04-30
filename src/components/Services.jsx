function Services() {
    return (
      <section id="services" className="services">
        <div className="services__container">
          <p className="section__tag">Services</p>
          <h2>Events I can host</h2>
  
          <div className="services__grid">
            {/* Weddings */}
            <div className="service__card">
              <div className="service__image"></div>
              <h3>Weddings</h3>
              <p>
                Warm and engaging hosting for receptions, solemnizations,
                and wedding celebrations.
              </p>
            </div>
  
            {/* Corporate */}
            <div className="service__card">
              <div className="service__image"></div>
              <h3>Corporate Events</h3>
              <p>
                Professional hosting for company dinners, launches, awards,
                and formal programs.
              </p>
            </div>
  
            {/* Private */}
            <div className="service__card">
              <div className="service__image"></div>
              <h3>Private Events</h3>
              <p>
                Lively hosting for birthdays, gatherings, celebrations,
                and special occasions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;