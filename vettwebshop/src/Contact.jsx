const Contact = () => (
  <div className="contactcontainer">
    <div className="content">
      <h2>Have questions? Fill out the form below.</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email Address</label><br/>
        <input type="email" placeholder="xxxxx@gmail.com" required /><br/>
        <label>Subject</label><br/>
        <input type="text" placeholder="I’m always drinking this bucket filled with moonlight" required /><br/>
        <label>Message</label><br/>
        <textarea defaultValue="Via a ladle, its bottom cleanly taken off..."></textarea><br/>
        <input type="submit" className="submitbutton" value="Send" />
      </form>
    </div>
  </div>
);